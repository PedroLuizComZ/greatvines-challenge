import { render, screen } from "@testing-library/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateContact from "../pages/CreateContact";

test("renders Create Contact Title", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<CreateContact />} />{" "}
      </Routes>
    </Router>
  );
  const h1Element = screen.getByText(/Create Contact/i);
  expect(h1Element).toBeInTheDocument();
});

test("renders First Name label", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<CreateContact />} />{" "}
      </Routes>
    </Router>
  );
  const FirstNameLabel = screen.getByText(/First Name/i);
  expect(FirstNameLabel).toBeInTheDocument();
});

test("renders First Name input", () => {
  const { container } = render(
    <Router>
      <Routes>
        <Route path="/" element={<CreateContact />} />{" "}
      </Routes>
    </Router>
  );
  const FirstNameInput = container.querySelector('input[name="First Name"]');
  expect(FirstNameInput).toBeInTheDocument();
});

test("renders Last Name label", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<CreateContact />} />{" "}
      </Routes>
    </Router>
  );
  const LastNameLabel = screen.getByText(/Last Name/i);
  expect(LastNameLabel).toBeInTheDocument();
});

test("renders Last Name input", () => {
  const { container } = render(
    <Router>
      <Routes>
        <Route path="/" element={<CreateContact />} />{" "}
      </Routes>
    </Router>
  );
  const LastNameInput = container.querySelector('input[name="Last Name"]');
  expect(LastNameInput).toBeInTheDocument();
});

test("renders Confirm button", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<CreateContact />} />{" "}
      </Routes>
    </Router>
  );
  const ConfirmButton = screen.getByText(/Confirm/i);
  expect(ConfirmButton).toBeInTheDocument();
});

