"use client"
import React from "react";
import { useState } from "react"
import { MapPin, Phone, Mail, Send, Headset, Users } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      service: "",
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-[#151c26] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-[#1c2636] rounded-lg mb-4">
              <Headset className="h-8 w-8 text-[#00ff9d]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-lg text-gray-300">
              Ready to strengthen your security? Our team of experts is here to help. Reach out to us today to discuss
              your cybersecurity needs.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="bg-[#0d1117] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

              {formSubmitted ? (
                <div className="bg-[#183828] border border-[#00ff9d]/30 rounded-xl p-8 text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-[#00ff9d]/20 rounded-full mb-4">
                    <Send className="h-8 w-8 text-[#00ff9d]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Thank You!</h3>
                  <p className="text-gray-300">
                    Your message has been sent successfully. Our team will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#151c26] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff9d] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#151c26] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff9d] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#151c26] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff9d] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-[#151c26] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff9d] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-300 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#151c26] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff9d] focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="penetration-testing">Penetration Testing</option>
                      <option value="vulnerability-assessment">Vulnerability Assessment</option>
                      <option value="incident-response">Incident Response</option>
                      <option value="soc-services">SOC Services</option>
                      <option value="managed-security">Managed Security</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                      className="w-full bg-[#151c26] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff9d] focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#00ff9d] to-[#00c8ff] text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-[#00ff9d]/20 transition-all w-full"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

              <div className="bg-[#151c26] rounded-xl border border-gray-800 p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#1c2636] p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-[#00ff9d]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Our Office</h3>
                      <p className="text-gray-400">B 701, River Palace, Navdi Bandar Road, Navdi Bandar, Nanpura, Surat, Gujarat, 395001</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#1c2636] p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-[#00ff9d]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                      <p className="text-gray-400">+91 99244 83996</p>
                      <p className="text-gray-400">+91 99780 47712</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#1c2636] p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-[#00ff9d]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                      <p className="text-gray-400">soc@eoncyber.in</p>
                      <p className="text-gray-400">support@eoncyber.in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#151c26] rounded-xl border border-gray-800 p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Users className="h-5 w-5 text-[#00ff9d] mr-2" />
                  Schedule a Consultation
                </h3>
                <p className="text-gray-400 mb-6">
                  Prefer to speak with one of our security experts directly? Schedule a free consultation at a time that
                  works for you.
                </p>
                <button className="bg-transparent border border-[#00ff9d] text-[#00ff9d] font-bold py-3 px-6 rounded-lg hover:bg-[#00ff9d]/10 transition-all w-full">
                  Book a Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-[#151c26]">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Visit Our Office</h2>
          <div className="relative rounded-xl overflow-hidden border border-gray-800">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.0359315225678!2d72.81001476755134!3d21.18930401084143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e7bb61a5701%3A0x4331a0a4b6054059!2sRiver%20Palace!5e0!3m2!1sen!2sin!4v1741521517102!5m2!1sen!2sinheight=400&width=1200" alt="Map Location" className="w-full h-96 object-cover" />
            <div className="absolute bottom-6 left-6 bg-[#151c26]/90 backdrop-blur-md p-4 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-2">EonCyber Headquarters</h3>
              <p className="text-gray-300">B 701, River Palace, Navdi Bandar Road, Navdi Bandar, Nanpura, Surat, Gujarat, 395001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

