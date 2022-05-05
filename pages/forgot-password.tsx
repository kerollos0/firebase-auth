import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

import Card from "../components/Card";
import DividerWithText from "../components/DividerWithText";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";

const forgetPassword = () => {
  const router = useRouter();
  const toast = useToast();
  const { forgetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Forgot password
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            // your forgot password logic here
            setIsSubmitting(true);
            forgetPassword(email)
              .then(() =>
                toast({
                  description: "Email Sent, check your email",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                  position: "top-right",
                })
              )
              .catch((error) =>
                toast({
                  description: error.message,
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                  position: "top-right",
                })
              )
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
            <Button
              isLoading={isSubmitting}
              type="submit"
              colorScheme="pink"
              size="lg"
              fontSize="md"
            >
              Submit
            </Button>
          </Stack>
        </chakra.form>
        <DividerWithText>OR</DividerWithText>
        <Center>
          <Button variant="link" onClick={() => router.push("/login")}>
            Login
          </Button>
        </Center>
      </Card>
    </Layout>
  );
};

export default forgetPassword;
