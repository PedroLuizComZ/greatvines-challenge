import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from "./pages/ContactList";
import CreateContact from "./pages/CreateContact";
import Home from "./pages/Home";
import Login from "./pages/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact-list" element={<ContactList />} />
        <Route path="/create-contact" element={<CreateContact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
