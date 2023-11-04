import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavbarContainer } from "containers/Navbar";
import { Pages } from "containers/Pages";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router>
          <NavbarContainer />
          <Pages />
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
