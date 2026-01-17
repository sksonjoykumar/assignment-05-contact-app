/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

// API_URL
const apiUrl = "http://localhost:5000/contacts";
const UserProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("default");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  // navigate
  const navigate = useNavigate();

  // READ
  const fetchContacts = async () => {
    const res = await fetch(apiUrl);
    const result = await res.json();
    setContacts(result);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // userDetails
  const handleUserDetails = async (id) => {
    const res = await fetch(`${apiUrl}/${id}`);
    const result = await res.json();
    setUserData(result);
  };

  // handleChange
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // create and update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // update
      if (editId) {
        await fetch(`${apiUrl}/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else {
        // create
        await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      });
      setEditId(null);
      navigate("/", { replace: true });
      fetchContacts();
    } catch (error) {
      console.log("Submit error", error);
    }
  };

  // edit
  const handleEdit = (user) => {
    setFormData(user);
    setEditId(user.id);
  };

  // delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?"))
      await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });
    fetchContacts();
    navigate("/", { replace: true });
  };

  const filteredContacts = contacts
    .filter((c) =>
      `${c.firstName} ${c.lastName} ${c.email} ${c.phone}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (filter === "firstName") return a.firstName.localeCompare(b.firstName);
      if (filter === "lastName") return b.lastName.localeCompare(a.lastName);
      if (filter === "oldestToFirst") return a.id - b.id;
      return 0;
    });

  // user
  const user = {
    formData,
    setFormData,
    editId,
    setEditId,
    contacts,
    handleChange,
    fetchContacts,
    handleSubmit,
    handleEdit,
    handleDelete,
    userData,
    handleUserDetails,
    search,
    setSearch,
    filter,
    setFilter,
    filteredContacts,
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
export default UserProvider;
