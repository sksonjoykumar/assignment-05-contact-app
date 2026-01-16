import { Route, Routes } from "react-router-dom";
import ContactDetails from "./components/contact-details/ContactDetails";
import Home from "./components/home-page/Home";
import Navbar from "./components/navbar/Navbar";
import NewContact from "./components/new-Contact/NewContact";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-new" element={<NewContact />} />
          <Route
            path="/show"
            element={
              <ContactDetails
                contact={{
                  firstName: "Alfred",
                  lastName: "Kuhlman",
                  email: "alfred@test.com",
                  phone: "98989898",
                  address: "Lorem ipsum dolor",
                }}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
