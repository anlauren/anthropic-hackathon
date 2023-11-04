import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider, Box, VStack } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavbarContainer } from "./containers/Navbar";
import { Pages } from "./containers/Pages";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router>
          <Box minH="100vh" display="flex" flexDirection="column">
            <NavbarContainer />
            <VStack flex="1" justifyContent="flex-start">
              <Pages />
            </VStack>
            <Footer />
          </Box>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
