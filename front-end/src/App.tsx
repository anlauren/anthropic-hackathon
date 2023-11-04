import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider, Box } from "@chakra-ui/react";
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
          <NavbarContainer />
          <Box minH="90vh" display="flex" flexDirection="column">
            <Pages />
          </Box>
          <Footer />
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
