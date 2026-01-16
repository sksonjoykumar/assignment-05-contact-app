import { Route, Routes } from "react-router-dom";
import ContactDetails from "./pages/contact-details/ContactDetails";
import Navbar from "./components/navbar/Navbar";
import NewContact from "./pages/new-Contact/NewContact";
import Home from "./pages/home-page/Home";

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
