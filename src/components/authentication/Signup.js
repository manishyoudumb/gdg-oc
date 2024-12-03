import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  useToast,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function Signup() {
  const { googleSignIn, githubSignIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await googleSignIn();
      toast({
        title: "Account successfully created",
        status: "success",
        duration: 5000,
      });
      history.push("/");
    } catch (err) {
      console.log(err);
      toast({
        title: "Failed to sign up",
        description: err.message,
        status: "error",
        duration: 5000,
      });
    }
    setLoading(false);
  };

  const handleGithubSignIn = async () => {
    try {
      setLoading(true);
      await githubSignIn();
      toast({
        title: "Account successfully created",
        status: "success",
        duration: 5000,
      });
      history.push("/");
    } catch (err) {
      console.log(err);
      toast({
        title: "Failed to sign up",
        description: err.message,
        status: "error",
        duration: 5000,
      });
    }
    setLoading(false);
  };

  return (
    <Box
      w="100%"
      h="100vh"
      d="flex"
      justifyContent="center"
      alignContent="center"
    >
      <Box
        d="flex"
        w={["100vw", null, null, "40vw"]}
        h="100vh"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        flexDirection="column"
      >
        <Box w="90%" maxW="400px" boxShadow="lg" px={6} py={8} rounded="lg">
          <Text fontSize="2xl" fontWeight="semibold" mb={4}>
            Sign Up
          </Text>
          <Button
            w="100%"
            mt={4}
            py={6}
            colorScheme="blue"
            onClick={handleGoogleSignIn}
            isLoading={loading}
          >
            Sign up with Google
          </Button>
          <Button
            w="100%"
            mt={4}
            py={6}
            colorScheme="gray"
            onClick={handleGithubSignIn}
            isLoading={loading}
          >
            Sign up with GitHub
          </Button>
        </Box>
        <Text mt={8} fontWeight="normal" fontSize="lg">
          Already have an account?{" "}
          <Link to="/login">
            <ChakraLink color="blue.400">Login</ChakraLink>
          </Link>
        </Text>
      </Box>
      <Box
        w={["0vw", null, null, "60vw"]}
        h="100%"
        bgGradient="linear(to-br, blue.500, blue.400)"
        boxShadow="2xl"
      ></Box>
    </Box>
  );
}

export default Signup;