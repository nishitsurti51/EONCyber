import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Careers from "./pages/Careers"
import Contact from "./pages/Contact"
import ServicesSection from "./components/ServicesSection"
import ServiceDetail from "./pages/ServiceDetail"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./styles/globals.css"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0d1117]">
      {/* <div className="bg-blue-500 text-white p-4 text-xl font-bold">
      Tailwind is working! 🚀
    </div> */}
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

