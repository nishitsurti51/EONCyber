import React from "react";
import Hero from "../components/Hero"
import ServicesSection from "../components/ServicesSection"
import { CheckCircle, ArrowRight, Shield, Users, Zap } from "lucide-react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#151c26]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/20 to-[#00c8ff]/20 rounded-2xl blur-xl transform -rotate-6 scale-95"></div>
              <img
                src="/photo-1.png?height=400&width=500"
                alt="Security Operations Center"
                className="relative rounded-2xl border border-gray-800 shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose EonCyber?</h2>
              <p className="text-gray-400 mb-8">
                We are more than just a cybersecurity company—we are defenders of the digital realm. Our mission is to
                provide cutting-edge security solutions that neutralize cyber threats before they strike.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-[#00ff9d] mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Expert-Led Security</h3>
                    <p className="text-gray-400">
                      Our specialists bring industry-recognized certifications and years of experience protecting
                      critical infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-[#00ff9d] mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">24/7 Threat Monitoring</h3>
                    <p className="text-gray-400">
                      Continuous security operations to detect and mitigate threats before they impact your business.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-[#00ff9d] mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Proactive Approach</h3>
                    <p className="text-gray-400">
                      We don't just respond to attacks; we prevent them with advanced threat intelligence and proactive
                      security measures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center font-bold text-[#00c8ff] hover:text-[#00ff9d] transition-colors"
                >
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Solutions Section */}
      <section className="py-16 bg-[#0d1117]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Solutions</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our most popular cybersecurity solutions that help organizations stay protected in today's threat
              landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#151c26] p-8 rounded-xl border border-gray-800 hover:border-[#00ff9d]/30 transition-all duration-300 group">
              <Shield className="h-12 w-12 text-[#00ff9d] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Firewall Protection</h3>
              <p className="text-gray-400 mb-6">
                Next-generation firewall solutions that provide deep packet inspection and advanced threat protection
                for your network perimeter.
              </p>
              <Link
                to="/services/advanced-firewall"
                className="inline-flex items-center font-bold text-[#00c8ff] hover:text-[#00ff9d] transition-colors"
              >
                Explore Solution <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-[#151c26] p-8 rounded-xl border border-gray-800 hover:border-[#00ff9d]/30 transition-all duration-300 group">
              <Users className="h-12 w-12 text-[#00ff9d] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Phishing Defense Program</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive protection against social engineering attacks with employee training, simulations, and
                technical controls.
              </p>
              <Link
                to="/services/phishing-defense"
                className="inline-flex items-center font-bold text-[#00c8ff] hover:text-[#00ff9d] transition-colors"
              >
                Explore Solution <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-[#151c26] p-8 rounded-xl border border-gray-800 hover:border-[#00ff9d]/30 transition-all duration-300 group">
              <Zap className="h-12 w-12 text-[#00ff9d] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Rapid Incident Response</h3>
              <p className="text-gray-400 mb-6">
                24/7 emergency response team ready to deploy when security incidents occur, minimizing damage and
                recovery time.
              </p>
              <Link
                to="/services/incident-response"
                className="inline-flex items-center font-bold text-[#00c8ff] hover:text-[#00ff9d] transition-colors"
              >
                Explore Solution <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#151c26] to-[#0d1117]">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1c2636] to-[#151c26] p-12 rounded-2xl border border-gray-800 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00ff9d] opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00c8ff] opacity-10 rounded-full blur-3xl"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Fortify Your Security?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact our team of cybersecurity experts today to schedule a free consultation and discover how
                EonCyber can protect your business from evolving cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-[#00ff9d] to-[#00c8ff] text-black font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-[#00ff9d]/20 transition-all text-center"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  to="/services"
                  className="bg-transparent border border-gray-700 text-white font-bold py-3 px-8 rounded-lg hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all text-center"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

