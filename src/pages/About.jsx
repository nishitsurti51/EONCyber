import React from "react";
import { Shield, CheckCircle, Award, Users, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-[#151c26] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-[#1c2636] rounded-lg mb-4">
              <Shield className="h-8 w-8 text-[#00ff9d]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About EonCyber</h1>
            <p className="text-lg text-gray-300">
              We are more than just a cybersecurity company—we are defenders of the digital realm, committed to
              protecting your business from evolving cyber threats.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/20 to-[#00c8ff]/20 rounded-2xl blur-xl"></div>
            <img
              src="/photo-3.png?height=500&width=1200"
              alt="EonCyber Team"
              className="relative rounded-2xl border border-gray-800 shadow-2xl w-full"
            />
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-[#0d1117] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2024, EonCyber emerged from a vision to create a more secure digital world for businesses of
                all sizes. What began as a small team of passionate security experts has grown into a leading
                cybersecurity firm with a global presence.
              </p>
              <p className="text-gray-300 mb-4">
                Our founders recognized that traditional security approaches were failing to address the rapidly
                evolving threat landscape. They set out to build a company that combines cutting-edge technology with
                human expertise to deliver comprehensive security solutions.
              </p>
              <p className="text-gray-300">
                Today, EonCyber serves hundreds of clients across industries, from financial services and healthcare to
                retail and manufacturing. Our mission remains the same: to protect our clients' most valuable digital
                assets and enable them to operate with confidence in an increasingly hostile digital environment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#151c26] p-6 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-[#00ff9d] mb-2">5+</div>
                <div className="text-white font-medium">Clients Protected</div>
              </div>
              <div className="bg-[#151c26] p-6 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-[#00ff9d] mb-2">10+</div>
                <div className="text-white font-medium">Security Experts</div>
              </div>
              <div className="bg-[#151c26] p-6 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-[#00ff9d] mb-2">3+</div>
                <div className="text-white font-medium">Years Experience</div>
              </div>
              <div className="bg-[#151c26] p-6 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-[#00ff9d] mb-2">24/7</div>
                <div className="text-white font-medium">Support & Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="bg-[#151c26] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission & Values</h2>
            <p className="text-lg text-gray-300">
              At EonCyber, we're driven by a clear mission and guided by strong values that shape everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#0d1117] p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                To provide innovative and reliable cybersecurity solutions that protect organizations from threats,
                enable business growth, and foster trust in the digital world.
              </p>
              <div className="space-y-4">
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-[#00ff9d] mr-4 flex-shrink-0" />
                  <p className="text-gray-300">Protect critical digital assets and infrastructure</p>
                </div>
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-[#00ff9d] mr-4 flex-shrink-0" />
                  <p className="text-gray-300">Reduce security risks through proactive measures</p>
                </div>
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-[#00ff9d] mr-4 flex-shrink-0" />
                  <p className="text-gray-300">Empower organizations with security knowledge</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117] p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="bg-[#151c26] h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="h-5 w-5 text-[#00ff9d]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Integrity</h4>
                    <p className="text-gray-300">We operate with transparency and honesty in all we do</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-[#151c26] h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="h-5 w-5 text-[#00ff9d]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Excellence</h4>
                    <p className="text-gray-300">We strive for the highest quality in our solutions and services</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-[#151c26] h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-5 w-5 text-[#00ff9d]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Collaboration</h4>
                    <p className="text-gray-300">We work together with our clients as trusted partners</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-[#0d1117] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Leadership Team</h2>
            <p className="text-lg text-gray-300">
              Meet the experts leading our mission to protect businesses from cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* <div className="bg-[#151c26] rounded-xl border border-gray-800 overflow-hidden group">
              <div className="relative">
                <img
                  src="/jaymin.png?height=300&width=300"
                  alt="Jaymin Trivedi"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151c26] to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Mr. Jaymin Trivedi</h3>
                <p className="text-[#00ff9d] font-medium mb-4">CEO & Co-Founder</p>
                <p className="text-gray-400">
                  Former Tech Expert with 2+ years of experience in cybersecurity leadership and strategy.
                </p>
              </div>
            </div> */}

            {/* <div className="bg-[#151c26] rounded-xl border border-gray-800 overflow-hidden group">
              <div className="relative">
                <img
                  src="/prakash.png?height=300&width=300"
                  alt="Prakash Rakhasiya"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151c26] to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Prakash Rakhasiya</h3>
                <p className="text-[#00ff9d] font-medium mb-4">CTO & Co-Founder</p>
                <p className="text-gray-400">
                  Security researcher and architect specializing in threat detection and response.
                </p>
              </div>
            </div> */}

            {/* <div className="bg-[#151c26] rounded-xl border border-gray-800 overflow-hidden group">
              <div className="relative">
                <img
                  src="/avatar-3.svg?height=300&width=300"
                  alt="Viral Pathak"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151c26] to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Viral Pathak</h3>
                <p className="text-[#00ff9d] font-medium mb-4">Manager of SOC Operations</p>
                <p className="text-gray-400">
                  Expert in building and managing 24/7 security operations centers for enterprises.
                </p>
              </div>
            </div> */}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center font-bold text-[#00c8ff] hover:text-[#00ff9d] transition-colors"
            >
              Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#151c26] py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1c2636] to-[#0d1117] p-12 rounded-2xl border border-gray-800 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00ff9d] opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00c8ff] opacity-10 rounded-full blur-3xl"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Partner With Us</h2>
              <p className="text-gray-300 text-lg mb-8">
                Join the hundreds of organizations that trust EonCyber to protect their critical assets and
                infrastructure from cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                href="https://wa.me/9328698605?text=Hello%20Team,%0A%0AI%20am%20keen%20to%20explore%20how%20your%20cybersecurity%20solutions%20can%20enhance%20our%20security%20posture.%0AI%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20our%20requirements%20and%20understand%20your%20offerings%20in%20detail.%0A%0APlease%20share%20the%20available%20time%20slots%20at%20your%20earliest%20convenience." // Replace with your meeting scheduling link
                target="_blank"
                rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#00ff9d] to-[#00c8ff] text-black font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-[#00ff9d]/20 transition-all text-center"
                >
                  Get Started Today
                </a>
                <Link
                  to="/services"
                  className="bg-transparent border border-gray-700 text-white font-bold py-3 px-8 rounded-lg hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all text-center"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

