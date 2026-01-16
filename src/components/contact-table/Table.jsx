import { Eye, Pencil, X } from "lucide-react";
import { Link } from "react-router-dom";
import { users } from "../../lib";

const ContactTable = () => {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log("Delete user:", id);
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg bg-white">
      <div className="p-4">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead className="border-t border-gray-200">
            <tr className="text-left text-sm text-gray-700">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">First Name</th>
              <th className="px-4 py-3">Last Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="w-37.5 px-4 py-3">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 text-sm odd:bg-gray-100 hover:bg-gray-100"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{user.firstName}</td>
                <td className="px-4 py-3">{user.lastName}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.phone}</td>

                {/* Actions */}
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/show`}
                      title="Show"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-500 text-blue-500 transition hover:bg-blue-500 hover:text-white"
                    >
                      <Eye size={16} />
                    </Link>

                    <Link
                      to={"/add-new"}
                      title="Edit"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-500 text-gray-600 transition hover:bg-gray-600 hover:text-white"
                    >
                      <Pencil size={16} />
                    </Link>

                    <button
                      title="Delete"
                      onClick={() => handleDelete(user.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-red-500 text-red-500 transition hover:bg-red-500 hover:text-white"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactTable;
