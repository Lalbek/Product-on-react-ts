import { Router } from "../src/Router/Router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
