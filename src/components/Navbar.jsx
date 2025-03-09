"use client"
import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Shield, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0d1117]/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/favicon.png" alt="logo" className="h-16 w-16 text-[#00ff9d]" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] to-[#00c8ff]">
              EonCyber
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-[#00ff9d] font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-[#00ff9d] font-medium transition-colors">
              About
            </Link>
            <div className="relative group">
              <span className="text-gray-300 hover:text-[#00ff9d] font-medium transition-colors cursor-pointer">
                Services
              </span>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#151c26] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                <div className="py-1">
                  <Link
                    to="/services/penetration-testing"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#1c2636] hover:text-[#00ff9d]"
                  >
                    Penetration Testing
                  </Link>
                  <Link
                    to="/services/vulnerability-assessment"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#1c2636] hover:text-[#00ff9d]"
                  >
                    Vulnerability Assessment
                  </Link>
                  <Link
                    to="/services/incident-response"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#1c2636] hover:text-[#00ff9d]"
                  >
                    Incident Response
                  </Link>
                  <Link
                    to="/services/soc-services"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#1c2636] hover:text-[#00ff9d]"
                  >
                    SOC Services
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/contact" className="text-gray-300 hover:text-[#00ff9d] font-medium transition-colors">
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#00ff9d] to-[#00c8ff] text-black font-bold py-2 px-4 rounded-md hover:shadow-lg hover:shadow-[#00ff9d]/20 transition-all"
            >
              Get Protected
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-gray-300 hover:text-[#00ff9d]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-3 mt-3">
              <Link
                to="/"
                className="text-gray-300 hover:text-[#00ff9d] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-[#00ff9d] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="py-2">
                <span className="text-gray-300 font-medium">Services</span>
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <Link
                    to="/services/penetration-testing"
                    className="text-gray-400 hover:text-[#00ff9d]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Penetration Testing
                  </Link>
                  <Link
                    to="/services/vulnerability-assessment"
                    className="text-gray-400 hover:text-[#00ff9d]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Vulnerability Assessment
                  </Link>
                  <Link
                    to="/services/incident-response"
                    className="text-gray-400 hover:text-[#00ff9d]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Incident Response
                  </Link>
                  <Link
                    to="/services/soc-services"
                    className="text-gray-400 hover:text-[#00ff9d]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SOC Services
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-[#00ff9d] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#00ff9d] to-[#00c8ff] text-black font-bold py-2 px-4 rounded-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Protected
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

