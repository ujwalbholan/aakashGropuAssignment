import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/navComponent/Home";
import About from "./components/navComponent/About";
import Teams from "./components/navComponent/Teams";
import Contact from "./components/navComponent/Contact";
import ApiPage from "./components/navComponent/ApiPage";
import Footer from "./components/Footer ";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apipage" element={<ApiPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
