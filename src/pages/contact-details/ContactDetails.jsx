/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../global-context/GlobalContext";

const ContactDetails = () => {
  const {
    userData,
    handleUserDetails,
    contacts,
    setFormData,
    setEditId,
    handleEdit,
    handleDelete,
  } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    handleUserDetails(id);

    if (id) {
      const contact = contacts.find((c) => c.id === Number(id));
      if (contact) {
        setFormData(contact);
        setEditId(id);
      }
    }
  }, [id, contacts]);

  return (
    <>
      <div className="mx-auto mt-10 max-w-3xl rounded-lg bg-white shadow">
        {/* Header */}
        <div className="rounded-t-md bg-[#435d7d] p-5">
          <h1 className="text-xl font-semibold text-white">User Details</h1>
        </div>

        {/* Body */}
        <div className="space-y-5 p-6">
          <DetailRow label="First Name" value={userData.firstName} />
          <DetailRow label="Last Name" value={userData.lastName} />
          <DetailRow label="Email" value={userData.email} />
          <DetailRow label="Phone" value={userData.phone} />
          <DetailRow label="Address" value={userData.address} />

          <hr className="my-6 text-gray-300" />

          {/* Actions */}
          <div className="flex gap-3 md:ml-[25%]">
            <Link
              to={`/update/${userData.id}`}
              onClick={() => handleEdit(userData)}
              className="rounded bg-blue-500 px-5 py-2 text-white transition hover:bg-blue-600"
            >
              Edit
            </Link>

            <button
              onClick={() => handleDelete(userData.id)}
              className="rounded border border-red-500 px-5 py-2 text-red-500 transition hover:bg-red-500 hover:text-white"
            >
              Delete
            </button>

            <Link
              to={"/"}
              className="rounded border border-gray-400 px-5 py-2 text-gray-600 transition hover:bg-gray-100"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex flex-col md:flex-row">
    <span className="font-medium text-gray-700 md:w-1/4">{label}</span>
    <span className="text-gray-500 md:w-3/4">{value || "-"}</span>
  </div>
);

export default ContactDetails;
