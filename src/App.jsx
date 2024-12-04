import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu"; // Import MobileMenu

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Team from "./pages/Team";

function App() {
  // Optional: If you want to conditionally render the MobileMenu
  const ConditionalMobileMenu = () => {
    const location = useLocation();
    const showMobileMenu = ["/", "/about", "/services", "/contact"].includes(
      location.pathname
    );
    return showMobileMenu ? <MobileMenu /> : null;
  };

  return (
    <>
      <Router>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourTeam" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ConditionalMobileMenu /> {/* Add the mobile menu here */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
