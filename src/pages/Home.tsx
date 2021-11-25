import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="App">
      <main className="App-main">
        <h1>Welcome, what are you looking for</h1>
        <div className="navigation-container">
          <Link to="/contact-list">Contact List</Link>
          <Link to="/create-contact">Create Contact</Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
