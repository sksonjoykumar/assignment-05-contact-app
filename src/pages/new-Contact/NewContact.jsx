/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../global-context/GlobalContext";

export default function NewContact() {
  const {
    contacts,
    formData,
    handleChange,
    editId,
    handleSubmit,
    setFormData,
    setEditId,
  } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
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
      <main className="m-10 mx-auto max-w-312.5 px-4 md:px-20">
        <div className="flex items-center justify-center">
          <div className="w-3xl rounded-md border border-gray-400 shadow-sm">
            <div className="rounded-t-md bg-[#435d7d] p-5">
              <h1 className="text-xl font-semibold text-white">
                {editId ? "Update Contact" : "Add New Contact"}
              </h1>
            </div>
            <div className="rounded-b-md p-5">
              <form onSubmit={handleSubmit}>
                <div class="mb-5 flex items-center gap-3">
                  <label
                    htmlFor="firstName"
                    className="w-20 text-lg text-gray-800 lg:w-52"
                  >
                    First Name
                  </label>
                  <input
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    type="text"
                    name="firstName"
                    className="focus:ring-none focus:ring-none w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-xs focus:border-2 focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-2 focus:outline-blue-200"
                    placeholder="First Name"
                  />
                </div>
                <div class="mb-5 flex items-center gap-3">
                  <label
                    htmlFor="lastName"
                    className="w-20 text-lg text-gray-800 lg:w-52"
                  >
                    Last Name
                  </label>
                  <input
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    type="text"
                    name="lastName"
                    className="focus:ring-none focus:ring-none w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-xs focus:border-2 focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-2 focus:outline-blue-200"
                    placeholder="Last Name"
                  />
                </div>
                <div class="mb-5 flex items-center gap-3">
                  <label
                    htmlFor="email"
                    className="w-20 text-lg text-gray-800 lg:w-52"
                  >
                    Email
                  </label>
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    name="email"
                    className="focus:ring-none focus:ring-none w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-xs focus:border-2 focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-2 focus:outline-blue-200"
                    placeholder="Email"
                  />
                </div>
                <div class="mb-5 flex items-center gap-3">
                  <label
                    htmlFor="phone"
                    className="w-20 text-lg text-gray-800 lg:w-52"
                  >
                    Phone
                  </label>
                  <input
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    type="number"
                    name="phone"
                    className="focus:ring-none focus:ring-none w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-xs focus:border-2 focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-2 focus:outline-blue-200"
                    placeholder="Phone"
                  />
                </div>
                <div class="mb-5 flex items-center gap-3">
                  <label
                    htmlFor="address"
                    className="w-20 text-lg text-gray-800 lg:w-52"
                  >
                    Address
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={handleChange}
                    required
                    name="address"
                    className="focus:ring-none focus:ring-none w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-xs focus:border-2 focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-2 focus:outline-blue-200"
                    placeholder="Address..."
                  />
                </div>
                <div className="flex justify-center gap-3 sm:ml-20 md:justify-start lg:ml-42.5">
                  <button
                    type="submit"
                    className="focus:ring-brand-medium cursor-pointer rounded-md bg-blue-500 px-4 py-1.5 text-white transition-all duration-300 hover:bg-blue-600"
                  >
                    {editId ? "Update" : "Save"}
                  </button>
                  <Link
                    to={"/"}
                    type="button"
                    className="focus:ring-brand-medium cursor-pointer rounded-md bg-blue-500 px-4 py-1.5 text-white transition-all duration-300 hover:bg-blue-600"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
