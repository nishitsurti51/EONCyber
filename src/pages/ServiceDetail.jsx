"use client"
import React from "react";
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { servicesData } from "../data/services"

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const [service, setService] = useState(null)

  useEffect(() => {
    // Find the service data based on the serviceId
    const foundService = servicesData.find((s) => s.id === serviceId)
    setService(foundService)

    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [serviceId])

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Service not found</h2>
        <p className="text-gray-400 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-flex items-center text-[#00c8ff] hover:text-[#00ff9d] font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-[#151c26] py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-[#00c8ff] hover:text-[#00ff9d] font-medium mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-[#1c2636] to-[#0d1117] rounded-lg p-4 inline-block mb-4">
                {service.icon && <service.icon className="h-8 w-8 text-[#00ff9d]" />}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{service.title}</h1>
              <p className="text-lg text-gray-300 mb-8">{service.longDescription}</p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#00ff9d] to-[#00c8ff] text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-[#00ff9d]/20 transition-all inline-block"
              >
                Request This Service
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/20 to-[#00c8ff]/20 rounded-2xl blur-xl transform rotate-3"></div>
              <img
                src={service.image || "/placeholder.svg?height=400&width=500"}
                alt={service.title}
                className="relative rounded-2xl border border-gray-800 shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#0d1117] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Key Features</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {service.features &&
              service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#151c26] p-6 rounded-xl border border-gray-800 hover:border-[#00ff9d]/30 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-[#1c2636] to-[#0d1117] rounded-lg p-3 inline-block mb-4">
                    {feature.icon ? (
                      <feature.icon className="h-6 w-6 text-[#00ff9d]" />
                    ) : (
                      <CheckCircle className="h-6 w-6 text-[#00ff9d]" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#151c26] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Benefits</h2>
              <p className="text-gray-300 mb-8">
                {service.benefitsIntro ||
                  "Our service provides comprehensive protection and value to your organization through:"}
              </p>

              <div className="space-y-6">
                {service.benefits &&
                  service.benefits.map((benefit, index) => (
                    <div key={index} className="flex">
                      <CheckCircle className="h-6 w-6 text-[#00ff9d] mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-400">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/20 to-[#00c8ff]/20 rounded-2xl blur-xl transform -rotate-3"></div>
              <img
                src={service.benefitsImage || "/benefits.png?height=400&width=500"}
                alt="Benefits"
                className="relative rounded-2xl border border-gray-800 shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      {service.process && (
        <div className="bg-[#0d1117] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Our Process</h2>

            <div className="grid gap-8 max-w-4xl mx-auto">
              {service.process.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-6 relative">
                    <div className="bg-[#151c26] h-12 w-12 rounded-full border border-[#00ff9d] flex items-center justify-center text-[#00ff9d] font-bold">
                      {index + 1}
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="absolute top-12 bottom-0 left-1/2 w-0.5 -ml-0.5 bg-gradient-to-b from-[#00ff9d] to-[#151c26]"></div>
                    )}
                  </div>
                  <div className="bg-[#151c26] p-6 rounded-xl border border-gray-800 flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Related Services */}
      <div className="bg-[#151c26] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Related Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {service.relatedServices &&
              service.relatedServices.map((id, index) => {
                const relatedService = servicesData.find((s) => s.id === id)
                if (!relatedService) return null

                return (
                  <div
                    key={index}
                    className="bg-[#0d1117] p-6 rounded-xl border border-gray-800 hover:border-[#00ff9d]/30 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-[#1c2636] to-[#0d1117] rounded-lg p-4 inline-block mb-4">
                      {relatedService.icon && (
                        <relatedService.icon className="h-8 w-8 text-[#00ff9d] group-hover:text-[#00c8ff] transition-colors" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff9d] transition-colors">
                      {relatedService.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{relatedService.description}</p>
                    <Link
                      to={`/services/${relatedService.id}`}
                      className="inline-flex items-center font-bold text-[#00c8ff] hover:text-[#00ff9d] transition-colors"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                )
              })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0d1117] py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1c2636] to-[#151c26] p-12 rounded-2xl border border-gray-800 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00ff9d] opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00c8ff] opacity-10 rounded-full blur-3xl"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact our team today to learn more about our {service.title} service and how it can benefit your
                organization.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-[#00ff9d] to-[#00c8ff] text-black font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-[#00ff9d]/20 transition-all text-center"
                >
                  Contact Us
                </Link>
                <Link
                  to="/"
                  className="bg-transparent border border-gray-700 text-white font-bold py-3 px-8 rounded-lg hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all text-center"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail

