import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ContactDetails from "./pages/contact-details/ContactDetails";
import Home from "./pages/home-page/Home";
import NewContact from "./pages/new-Contact/NewContact";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-new" element={<NewContact />} />
          <Route path="/update/:id" element={<NewContact />} />
          <Route path="/show/:id" element={<ContactDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
