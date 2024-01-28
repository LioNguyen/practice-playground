import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "@/components";
import { navItems } from "@/constants";
import { Fonts, Theme } from "@/styles";
// import viteLogo from "/vite.svg";

export const theme = extendTheme({
  ...Theme,
});

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Container maxWidth={{ lg: "1024px" }}>
          <Navbar />

          <Routes>
            {navItems.map((item) => (
              <Route key={item.name} path={item.href} element={item.element} />
            ))}
          </Routes>
        </Container>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
