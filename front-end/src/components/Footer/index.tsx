import React from "react";
import { Box, Container, Text, Flex } from "@chakra-ui/react";
import { Logo } from "../Logo";

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="teal.300" px="6">
      <Container maxW="container.2xl">
        <Flex alignItems="center" justifyContent="space-between">
          <Logo />
          <Text>
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by Antoine, Gonzalo & Francesco
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
