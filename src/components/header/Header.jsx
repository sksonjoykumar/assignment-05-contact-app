import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../global-context/GlobalContext";

export default function Header() {
  const { search, setSearch } = useContext(UserContext);

  return (
    <>
      <div className="rounded-t-md bg-[#435d7d] p-5">
        <div className="flex justify-between gap-5">
          <h1 className="text-3xl font-semibold text-white">All Contacts</h1>
          <div>
            <div class="flex w-lg items-center">
              <input
                type="search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="focus:ring-none focus:ring-none w-full rounded-l-md border-none bg-white px-3 py-2.5 text-sm shadow-xs focus:border-none focus:outline-3 focus:outline-blue-400"
                placeholder="Search Contact"
              />
              <button
                onClick={() => setSearch(search)}
                type="button"
                className="focus:ring-brand-medium cursor-pointer rounded-r-md bg-[#28a745] px-3 py-2 text-white transition-all duration-300 hover:bg-[#288d40]"
              >
                Search
              </button>
            </div>
          </div>
          <Link
            to={"/add-new"}
            className="focus:ring-brand-medium cursor-pointer rounded-md bg-[#28a745] px-3 py-2 text-white transition-all duration-300 hover:bg-[#288d40]"
          >
            Add New
          </Link>
        </div>
      </div>
    </>
  );
}
