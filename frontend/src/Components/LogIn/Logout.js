import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform the logout logic by making an API request to the logout endpoint.
    // Replace 'localhost:5000/api/logout' with your actual API endpoint URL.

    axios
      .post("http://localhost:5000/api/logout")
      .then((response) => {
        // Assuming your logout endpoint returns a success message
        console.log(response.data);
        navigate("/login");
      })
      .catch((error) => {
        // Handle any errors that may occur during logout
        console.error("Logout failed:", error);
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;