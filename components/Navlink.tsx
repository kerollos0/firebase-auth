import React from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navlink({ to, name, ...rest }: any) {
  const router = useRouter();
  const isActive = router.pathname === to;

  return (
    <Link href={to}>
      <Button
        as="a"
        variant={isActive ? "outline" : "ghost"}
        colorScheme={isActive ? "pink" : "gray"}
        {...rest}
      >
        {name}
      </Button>
    </Link>
  );
}
