import { render, screen } from "@testing-library/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../pages/Login";

test("renders GreatVines Title", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />{" "}
      </Routes>
    </Router>
  );
  const h1Element = screen.getByText(/GreatVines/i);
  expect(h1Element).toBeInTheDocument();
});

test("renders login button", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />{" "}
      </Routes>
    </Router>
  );
  const loginButton = screen.getByText(/Login/i);
  expect(loginButton).toBeInTheDocument();
});
