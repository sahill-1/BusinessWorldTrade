import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import {
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
  Button,
} from "@chakra-ui/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { signinSuccess } from "../../reducers/authSlice"; // Import the action creator
import loginImage from "../images/login.jpg";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false); // Add a loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    setLoading(true); // Set loading to true
    axios
      .post("http://localhost:5000/api/signin", formData)
      .then((response) => {
        const { message, user, token } = response.data;
        toast.success(message);
        localStorage.setItem("token", token);

        // Dispatch the signinSuccess action to update Redux store
        dispatch(signinSuccess({ user, token }));
        setLoading(false); // Reset loading to false

        // Log successful login information
        console.log("Login successful:", user, token);
        navigate("/");
      })
      .catch((error) => {
        console.error("Login error:", error);
        toast.error("Invalid email or password.");
        setLoading(false); // Reset loading to false
      });
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Email validation logic
    const isValidEmail = /\S+@\S+\.\S+/.test(formData.email);

    if (!isValidEmail) {
      toast.error("Please enter a valid email!");
      return;
    }

    // Simulate login button click
    handleLogin();

    // Log form data
    console.log("Form data:", formData);
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
              <Button
                colorScheme={"blue"}
                variant={"solid"}
                type="submit"
                onClick={handleClick}
                isLoading={loading} // Use the isLoading prop to show loading state
                loadingText="Signing in..."
              >
                Sign in
              </Button>
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
}
