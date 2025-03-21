"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Briefcase, CheckCircle, Users, ArrowRight, Shield } from "lucide-react"

const careers = [
  {
    id: "security-analyst",
    title: "Security Analyst Intern",
    department: "Security Operations Center",
    // location: "Remote / Hybrid",
    type: "Internship",
    description:
      "We are looking for a skilled Security Analyst Intern to join our SOC team. The ideal candidate will have experience in monitoring security events, analyzing threats, and responding to incidents.",
  },
  {
    id: "security-analyst",
    title: "Security Analyst",
    department: "Security Operations Center",
    // location: "Remote / Hybrid",
    type: "Internship",
    description:
      "We are looking for a skilled Security Analyst Intern to join our SOC team. The ideal candidate will have experience in monitoring security events, analyzing threats, and responding to incidents.",
  },
  // {
  //   id: "penetration-tester",
  //   title: "Penetration Tester",
  //   department: "Security Services",
  //   // location: "Remote / Hybrid",
  //   type: "Full-time",
  //   description:
  //     "We are seeking an experienced Penetration Tester to conduct security assessments, identify vulnerabilities, and provide remediation recommendations for our clients.",
  // },
  // {
  //   id: "cloud-security-engineer",
  //   title: "Cloud Security Engineer",
  //   department: "Managed Security Services",
  //   location: "Remote / Hybrid",
  //   type: "Full-time",
  //   description:
  //     "We are looking for a Cloud Security Engineer to help secure our clients' cloud environments. The ideal candidate will have experience with AWS, Azure, or GCP security.",
  // },
  // {
  //   id: "security-consultant",
  //   title: "Security Consultant",
  //   department: "Professional Services",
  //   location: "Remote / Hybrid",
  //   type: "Full-time",
  //   description:
  //     "We are seeking a Security Consultant to work with clients to assess their security needs, develop security strategies, and implement security solutions.",
  // },
]

const benefits = [
  "Competitive salary and performance bonuses",
  "Comprehensive health, dental, and vision insurance",
  "Flexible work arrangements (remote/hybrid)",
  "Professional development and certification support",
  "Regular team building events and activities",
  "Cutting-edge technology and tools",
]

const Careers = () => {
  return (
    <div className="pt-20 bg-[#040B14] text-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#040B14]">
        <div className="container mx-auto px-4">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#00FFC2]/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#00FFC2]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Build your career with EonCyber and help protect organizations from cyber threats
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-[#071120]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="/team.png?height=600&width=800"
                alt="EonCyber Team"
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>

            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">Why Join EonCyber?</h2>
              <p className="text-lg text-gray-300 mb-6">
                At EonCyber, we're building a team of passionate cybersecurity professionals dedicated to protecting
                organizations from evolving threats. We offer a collaborative environment where innovation is encouraged
                and professional growth is supported.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Join us and work with cutting-edge technologies while solving complex security challenges for clients
                across various industries.
              </p>

              <h3 className="text-xl font-bold mb-4">Benefits & Perks</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-[#00FFC2] mr-3 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-[#040B14]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our current job openings and find your next career opportunity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careers.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-[#071120] rounded-xl p-6 hover:bg-[#0A1929] transition-colors border border-[#1A2333]"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#00FFC2]/10 flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-[#00FFC2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-gray-400">
                      {job.department} • {job.location} • {job.type}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{job.description}</p>
                <Link
                  to={`/careers/${job.id}`}
                  className="px-6 py-2 bg-[#00FFC2] text-black rounded-full
                    text-sm font-semibold hover:bg-[#00E0A9]
                    transition-all duration-300 inline-flex items-center"
                >
                  View Details <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#071120]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#071120] to-[#0A1929] rounded-2xl p-8 md:p-12 text-center border border-[#1A2333]"
          >
            <div className="w-16 h-16 rounded-full bg-[#00FFC2]/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-[#00FFC2]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't see the right position?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how
              you can contribute.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 bg-[#00FFC2] text-black rounded-full
                text-lg font-semibold hover:bg-[#00E0A9]
                transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#040B14]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#00FFC2] mb-2">5+</h3>
              <p className="text-gray-400">Protected Clients</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#00FFC2] mb-2">97.9%</h3>
              <p className="text-gray-400">Uptime</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#00FFC2] mb-2">24/7</h3>
              <p className="text-gray-400">Monitoring</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#00FFC2] mb-2">99.9%</h3>
              <p className="text-gray-400">Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers