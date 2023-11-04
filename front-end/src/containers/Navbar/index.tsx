import React from "react";
import { Box, Flex, Image, Avatar } from "@chakra-ui/react";

export const NavbarContainer = () => {
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
      {/* Logo on the left */}
      <Flex align="center" mr={5}>
        <Image src="/path-to-your-logo.png" alt="Logo" boxSize="50px" />
      </Flex>

      {/* Profile image on the right */}
      <Box>
        <Avatar
          size="md"
          name="Profile Name"
          src="/path-to-your-profile-image.jpg"
        />
      </Box>
    </Flex>
  );
};
