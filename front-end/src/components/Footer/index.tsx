import React from "react";
import { Box, Container, Image, Text, Flex } from "@chakra-ui/react";
import MyLogo from "../../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="teal.300" py="4">
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          <Image src={MyLogo} alt="Logo" boxSize="50px" />
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
