import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
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
          <Pages />
          <Footer />
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
