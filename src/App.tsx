import { Router } from "../src/Router/Router";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <Navbar />
      </StyledEngineProvider>

      <Router />
    </BrowserRouter>
  );
}

export default App;
