import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Refund from "./pages/Refund.jsx";
import About from "./pages/AboutUs.jsx";
import ContactPage from "./pages/ContactPage.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Indicators from "./pages/Indicators";
import Services from "./pages/Services";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/indicators" element={<Indicators />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </>
  );
}
