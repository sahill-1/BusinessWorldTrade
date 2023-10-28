import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
const GetAllUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/Getalluser")
      .then((response) => response.json())
      .then((res) => {
        setUser(res);
        console.log("res", res);
        console.log("userr", user.name);
      })
      .catch((error) => console.log("error", error));
  }, [setUser]);

  return (
    <>
      <Container>
        <h5>See All Users</h5>
      </Container>
      {/* {user.map((el) => {
        return (
          <div>
            <h5>{el.User.name}</h5>
          </div>
        );
      })} */}
    </>
  );
};

export default GetAllUser;
