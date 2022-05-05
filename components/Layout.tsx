import React from "react";
import { Container } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <Container maxW="container.md">{children}</Container>
    </>
  );
}
