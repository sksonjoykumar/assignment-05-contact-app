import { useState } from "react";
import { Link } from "react-router-dom";

// API_URL
const apiUrl = "http://localhost:5000/contacts";
export default function NewContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  console.log(process.env.JWT_SECRET);
  return (
    <>
      <main className="m-10 mx-auto max-w-312.5 px-4 md:px-20">
        <div className="flex items-center justify-center">
          <div className="w-3xl rounded-md border border-gray-400 shadow-sm">
            <div className="rounded-t-md bg-[#435d7d] p-5">
              <h1 className="text-xl font-semibold text-white">
                Add New Contact
              </h1>
            </div>
            <div className="rounded-b-md p-5">
              <form>
                <div class="mb-5 flex items-center gap-3">
                  <label
                    htmlFor="firstName"
                    className="w-20 text-lg text-gray-800 lg:w-52"
                  >
                    First Name
                  </label>
                  <input
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
                    type="email"
                    name="email"
                    className="focus:ring-none focus:ring-none w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-xs focus:border-2 focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-2 focus:outline-blue-200"
                    placeholder="email"
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
                    type="number"
                    name="phone"
                    className="focus:ring-none focus:ring-none w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-xs focus:border-2 focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-2 focus:outline-blue-200"
                    placeholder="email"
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
                    name="address"
                    className="focus:ring-none focus:ring-none w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-xs focus:border-2 focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-2 focus:outline-blue-200"
                    placeholder="Address..."
                  />
                </div>
                <div className="flex justify-center gap-3 sm:ml-20 md:justify-start lg:ml-42.5">
                  <button
                    type="button"
                    className="focus:ring-brand-medium cursor-pointer rounded-md bg-blue-500 px-4 py-1.5 text-white transition-all duration-300 hover:bg-blue-600"
                  >
                    Save
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
