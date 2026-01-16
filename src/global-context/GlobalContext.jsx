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

  console.log(contacts);
  console.log(userData);

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
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
export default UserProvider;
