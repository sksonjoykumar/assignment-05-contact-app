import { useContext } from "react";
import { UserContext } from "../../global-context/GlobalContext";

export default function Filter() {
  const { filter, setFilter } = useContext(UserContext);

  return (
    <>
      <div className="flex justify-between gap-3">
        <h3 className="text-2xl text-gray-900">Filter</h3>
        <form>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            name="contact"
            className="cursor-pointer rounded-md border-2 border-[#28a745] px-3 py-1 focus:outline-none"
          >
            <option value="default">Default</option>
            <option value="firstName">First Name (A - Z)</option>
            <option value="lastName">Last Name (Z - A)</option>
            <option value="oldestToFirst">Oldest To First</option>
          </select>
        </form>
      </div>
    </>
  );
}
