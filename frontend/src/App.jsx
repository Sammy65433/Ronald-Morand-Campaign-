import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Community from "./pages/Community";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/community" element={<Community />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
