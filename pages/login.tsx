import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import DividerWithText from "../components/DividerWithText";
import { Layout } from "../components/Layout";
import { AiOutlineGoogle } from "react-icons/ai";
import { useAuth } from "../contexts/AuthContext";
const LoginPage = () => {
  const router = useRouter();
  const { Login, SingInWithGoogle } = useAuth();

  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Login
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!email || !password) {
              toast({
                description: "Credentials not valid",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-right",
              });
            }
            setIsSubmitting(true);
            Login(email, password)
              .then(() => {
                toast({
                  description: "Welcome",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                  position: "top-right",
                });
                router.push("/profile");
              })
              .catch((error) => {
                toast({
                  description: error.message,
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                  position: "top-right",
                });
              })
              .finally(() => setIsSubmitting(false));
          }}
        >
          <Stack spacing="6">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                name="password"
                type="password"
                autoComplete="password"
                required
              />
            </FormControl>

            {/* <PasswordField /> */}
            <Button
              isLoading={isSubmitting}
              type="submit"
              colorScheme="pink"
              size="lg"
              fontSize="md"
            >
              Sign in
            </Button>
          </Stack>
        </chakra.form>
        <HStack justifyContent="space-between" my={4}>
          <Button variant="link">
            <Link href="/forgot-password">Forgot password?</Link>
          </Button>
          <Button variant="link" onClick={() => router.push("/register")}>
            Register
          </Button>
        </HStack>
        <DividerWithText>OR</DividerWithText>
        <Button
          variant="outline"
          isFullWidth
          colorScheme="red"
          leftIcon={<AiOutlineGoogle />}
          onClick={() =>
            SingInWithGoogle()
              .then((response) => router.push("/profile"))
              .catch((err) => console.log(err))
          }
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  );
};

export default LoginPage;
