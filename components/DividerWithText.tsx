import { Flex, Box, Divider, useColorModeValue, Text } from "@chakra-ui/react";
import React from "react";

const DividerWithText = ({ children }: any) => {
  return (
    <Flex align="center" color="gray.300" my="6">
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
      <Text
        as="span"
        px="3"
        color={useColorModeValue("gray.600", "gray.400")}
        fontWeight="medium"
      >
        {children}
      </Text>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
    </Flex>
  );
};

export default DividerWithText;
