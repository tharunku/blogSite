import React from "react";
import Header from "./ui/Header"
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/home" element={<Home />}  />
            <Route exact path="/about" element={<About />}  />
            <Route exact path="/contact" element={<Contact />}  />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
