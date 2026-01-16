import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <main className="sticky top-0 border-b border-gray-100 py-4 shadow-sm">
        <div className="mx-auto max-w-312.5 px-4 md:px-20">
          <Link
            to={"/"}
            className="text-[22px] font-extrabold text-[#dd5638] uppercase transition-all duration-300 hover:text-[#c94f33]"
          >
            {" "}
            Contact App
          </Link>
        </div>
      </main>
    </>
  );
}
