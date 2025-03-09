
import React from 'react';
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="bg-[#151c26] p-6 rounded-xl border border-gray-800 shadow-xl hover:shadow-[#00ff9d]/10 hover:border-[#00ff9d]/30 transition-all duration-300 group h-full flex flex-col">
      <div className="bg-gradient-to-br from-[#1c2636] to-[#0d1117] rounded-lg p-4 inline-block mb-4">
        <Icon className="h-8 w-8 text-[#00ff9d] group-hover:text-[#00c8ff] transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff9d] transition-colors">{title}</h3>
      <p className="text-gray-400 mb-6 flex-grow">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center font-bold text-[#00c8ff] hover:text-[#00ff9d] transition-colors mt-auto"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}

export default ServiceCard

