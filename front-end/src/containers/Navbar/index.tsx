import React from "react";
import { Box, Flex, Image, Avatar } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AvailablePage } from "../Pages";
import { Logo } from "../../components/Logo";

export const NavbarContainer = () => {
  const navigate = useNavigate();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex
        align="center"
        mr={5}
        onClick={() => navigate(AvailablePage.HomePage)}
        _hover={{ cursor: "pointer" }}
      >
        <Logo />
      </Flex>

      <Box>
        <Avatar
          size="md"
          name="Profile Name"
          src="/path-to-your-profile-image.jpg"
          _hover={{ cursor: "pointer" }}
        />
      </Box>
    </Flex>
  );
};
