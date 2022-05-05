import { chakra, Container, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { currentUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser]);
  return (
    <Layout>
      <Heading>Profile page</Heading>
      <Container maxW="container.lg" overflowX="auto" py={4}>
        <chakra.pre p={4}>
          {currentUser && <pre> {JSON.stringify(currentUser, null, 2)}</pre>}
        </chakra.pre>
      </Container>
    </Layout>
  );
};

export default Profile;
