import Table from "../../components/contact-table/Table";
import Filter from "../../components/filter/Filter";
import Header from "../../components/header/Header";

export default function Home() {
  return (
    <>
      <main className="m-10 mx-auto max-w-312.5 px-4 md:px-20">
        <div className="rounded-md border border-gray-300 shadow-md">
          <Header />
          <div className="p-5">
            <Filter />
            <Table />
          </div>
        </div>
      </main>
    </>
  );
}
