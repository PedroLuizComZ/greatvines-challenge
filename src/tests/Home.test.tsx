import { render, screen } from "@testing-library/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";

test("renders Home Title", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
      </Routes>
    </Router>
  );
  const h1Element = screen.getByText(/Welcome, what are you looking for/i);
  expect(h1Element).toBeInTheDocument();
});

test("renders Contact List button", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
      </Routes>
    </Router>
  );
  const ContactListButton = screen.getByText(/Contact List/i);
  expect(ContactListButton).toBeInTheDocument();
});

test("renders Create Contact button", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
      </Routes>
    </Router>
  );
  const CreateContactButton = screen.getByText(/Create Contact/i);
  expect(CreateContactButton).toBeInTheDocument();
});
