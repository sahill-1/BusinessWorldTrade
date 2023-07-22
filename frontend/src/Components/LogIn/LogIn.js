import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Checkbox,
  FormControl,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  ChakraProvider,
  FormLabel,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../reducers/FormSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillMicFill } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";

import loginImage from "../images/login.jpg";

const LogIn = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false); // Track login status
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const yourTokenCheckingFunction = () => {
    const token = localStorage.getItem("accessToken"); // Replace "accessToken" with the key you used to store the token

    // Check if the token exists and is not expired (you may use JWT or other token expiration logic)
    // In this example, we assume that if a token exists, the user is logged in.
    return !!token;
  };

  useEffect(() => {
    // Check if the user is already logged in (using any logic or stored token)
    const userLoggedIn = checkIfUserLoggedIn();
    setLoggedIn(userLoggedIn);
  }, []);

  const checkIfUserLoggedIn = () => {
    // You can add your logic here to check if the user is logged in or not,
    // e.g., using tokens, session storage, local storage, or an authentication API.
    // For demonstration purposes, I'll assume you have a function that checks the token and returns a boolean value.
    // Replace 'yourTokenCheckingFunction' with your actual token checking logic.

    const userLoggedIn = yourTokenCheckingFunction();
    return userLoggedIn;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // Simulating successful login
    setLoggedIn(true);
    toast.success("Successfully logged in!", {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate("/web");
  };

  const handleLogout = () => {
    // Simulating successful logout
    setLoggedIn(false);
    toast.success("Successfully logged out!", {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate("/login"); // Redirect to login page after logout
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Email validation logic
    const isValidEmail = /\S+@\S+\.\S+/.test(formData.email);

    if (!isValidEmail) {
      toast.error("Please enter a valid email!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    axios
      .post("http://localhost:5000/api/signin", formData)
      .then((res) => {
        dispatch(addUser(res.data));
        console.log(res);
        if (res) {
          handleLogin(); // Call the login function after successful login
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 401) {
          toast.error("Invalid email or password!", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else if (
          err.response &&
          err.response.data &&
          err.response.data.message
        ) {
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error("An error occurred. Please try again later.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });

    // Reset the form after submission if needed
    setFormData({});
  };

  return (
    <ChakraProvider>
      <ToastContainer />
      <Stack
        className="homepage-login-page"
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password || ""}
                onChange={handleChange}
              />
            </FormControl>

            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              {loggedIn ? (
                <Button
                  colorScheme={"blue"}
                  variant={"solid"}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  colorScheme={"blue"}
                  variant={"solid"}
                  type="submit"
                  onClick={handleClick}
                >
                  Sign in
                </Button>
              )}
            </Stack>
          </Stack>
        </Flex>

        <Flex flex={1}>
          <Image
            className="homepage-login-page-image"
            alt={"Login Image"}
            src={loginImage}
          />
        </Flex>
      </Stack>
    </ChakraProvider>
  );
};

export default LogIn;
