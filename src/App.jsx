import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import ApiPage from "./pages/ApiPage";
import Footer from "./components/Footer ";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/api-page" element={<ApiPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
