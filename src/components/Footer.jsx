import React from "react";
import { Link } from "react-router-dom"
import { Shield, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#0a0e14] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/favicon.png" alt="logo" className="h-16 w-16 text-[#00ff9d]" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] to-[#00c8ff]">
                EonCyber
              </span>
            </div>
            <p className="mb-4">
              Securing your digital world with advanced cybersecurity solutions. Our expert team ensures 24/7
              monitoring, incident response, and proactive threat management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00ff9d] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ff9d] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ff9d] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ff9d] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/penetration-testing" className="hover:text-[#00ff9d] transition-colors">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link to="/services/vulnerability-assessment" className="hover:text-[#00ff9d] transition-colors">
                  Vulnerability Assessment
                </Link>
              </li>
              <li>
                <Link to="/services/incident-response" className="hover:text-[#00ff9d] transition-colors">
                  Incident Response & Forensics
                </Link>
              </li>
              <li>
                <Link to="/services/cyber-awareness" className="hover:text-[#00ff9d] transition-colors">
                  Cyber Awareness Training
                </Link>
              </li>
              <li>
                <Link to="/services/soc-services" className="hover:text-[#00ff9d] transition-colors">
                  SOC Services
                </Link>
              </li>
              <li>
                <Link to="/services/managed-security" className="hover:text-[#00ff9d] transition-colors">
                  Managed Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#00ff9d] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00ff9d] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00ff9d] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00ff9d] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#00ff9d] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-[#00ff9d] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-8 w-8 text-[#00ff9d] mt-0.5" />
                <span>B 701, River Palace, Navdi Bandar Road, Navdi Bandar, Nanpura, Surat, Gujarat, 395001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#00ff9d]" />
                <span>+91 9924483996</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#00ff9d]" />
                <span>+91 99780 47712</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#00ff9d]" />
                <span>soc@eoncyber.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} EonCyber. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

