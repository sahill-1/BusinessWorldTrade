import React from "react";

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    fetch("http://localhost:5000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        onLogout(); // Call the onLogout function to update the isLoggedIn state
      })
      .catch((error) => {
        // Handle any errors that may occur during logout
        console.error("Logout failed:", error);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Logging out...</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
