import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Communion</h1>
      <p
        style={{
          fontSize: "18px",
          color: "#555",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Connecting people of all faiths through events and community support.
      </p>

      {/* Hero Section */}
      <div style={{ marginTop: "30px" }}>
        <h2>Connecting People Across Faiths & Interests</h2>
        <p>
          Join a community where people come together for meaningful events.
        </p>
        <Link to="/events">
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Explore Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
