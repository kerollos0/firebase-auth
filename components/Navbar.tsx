import {
  Box,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Navlink from "./Navlink";
import { HiMenu } from "react-icons/hi";
import { useAuth } from "../contexts/AuthContext";
export function Navbar() {
  const { toggleColorMode } = useColorMode();
  const { currentUser, logout } = useAuth();

  return (
    <Box
      borderBottom="2px"
      borderBottomColor={useColorModeValue("gray.100", "gray.700")}
      mb={4}
    >
      <HStack
        py={4}
        justifyContent="flex-end"
        maxW="container.lg"
        mx="auto"
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
      >
        <Navlink to="/" name="Firbase Authentication" size="lg" />
        <Spacer />
        {!currentUser && (
          <>
            <Navlink to="/login" name="Login" />
            <Navlink to="/register" name="Register" />
          </>
        )}

        {currentUser && (
          <>
            <Navlink to="/profile" name="Profile" />
            <Navlink
              to="/logout"
              name="Logout"
              onClick={(e: any) => {
                e.preventDefault();
                // handle logout
                logout();
              }}
            />
          </>
        )}

        <IconButton
          variant="outline"
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label="toggle-dark-mode"
        />
      </HStack>
      <HStack
        py={4}
        justifyContent="flex-end"
        maxW="container.lg"
        mx="auto"
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
      >
        <Navlink to="/" name="Firbase Authentication" size="lg" />
        <Spacer />

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HiMenu />}
            variant="outline"
          />
          <MenuList minWidth={"auto !important"}>
            <MenuItem>
              {" "}
              <Navlink to="/login" name="Login" />
            </MenuItem>
            <MenuItem>
              {" "}
              <Navlink to="/register" name="Register" />
            </MenuItem>
            <MenuItem>
              {" "}
              <Navlink to="/profile" name="Profile" />
            </MenuItem>
            <MenuItem>
              {" "}
              <Navlink
                to="/logout"
                name="Logout"
                onClick={(e: any) => {
                  e.preventDefault();
                  // handle logout
                  alert("logout user");
                }}
              />
            </MenuItem>
          </MenuList>
        </Menu>
        <IconButton
          variant="outline"
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label="toggle-dark-mode"
        />
      </HStack>
    </Box>
  );
}
