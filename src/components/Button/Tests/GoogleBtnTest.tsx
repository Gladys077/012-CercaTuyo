import React from "react";
import GoogleButton from "../GoogleBtn/GoogleButton";

const GoogleButtonTest = () => {
  const handleLogin = () => {
    alert("Login con Google");
  };

  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 400, margin: "0 auto" }}>
      <h2>Test: GoogleButton</h2>

      <GoogleButton onLogin={handleLogin} />

    </div>
  );
};

export default GoogleButtonTest;
