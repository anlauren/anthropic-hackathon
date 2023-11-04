import React from "react";
import { Box, Flex, Image, Avatar } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AvailablePage } from "../Pages";
import MyLogo from "../../assets/logo.png";

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
        <Image src={MyLogo} alt="Logo" boxSize="50px" />
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
