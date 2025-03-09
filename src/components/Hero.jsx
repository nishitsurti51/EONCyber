import React from 'react';
import { Link } from "react-router-dom"
import { Shield, ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[#0d1117] pt-24">
      {/* Background effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00ff9d] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-48 right-12 w-96 h-96 bg-[#00c8ff] opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-[#00ff9d]" />
              <span className="text-sm font-bold tracking-wider text-[#00ff9d] uppercase">
                Trusted Cybersecurity Partner
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Securing Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] to-[#00c8ff]">
                Digital World
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              In an era of evolving cyber threats, EonCyber stands as your trusted partner in cybersecurity. Our expert
              team ensures 24/7 monitoring, incident response, and proactive threat management.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#00ff9d] to-[#00c8ff] text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-[#00ff9d]/20 transition-all text-center"
              >
                Get Protected Now
              </Link>
              <Link
                to="/services"
                className="bg-transparent border border-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all flex items-center justify-center"
              >
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/20 to-[#00c8ff]/20 rounded-2xl blur-xl transform rotate-6 scale-95"></div>
            <img
              src="/photo-2.png?height=400&width=500"
              alt="Cybersecurity Protection"
              className="relative rounded-2xl border border-gray-800 shadow-2xl w-full"
            />
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#151c26] p-6 rounded-xl border border-gray-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00ff9d] mb-2">1000+</div>
            <div className="text-gray-400">Protected Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00ff9d] mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00ff9d] mb-2">24/7</div>
            <div className="text-gray-400">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00ff9d] mb-2">100%</div>
            <div className="text-gray-400">Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

