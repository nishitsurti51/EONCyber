
import React from 'react';
import ServiceCard from "./ServiceCard"
import { Shield, Search, ArrowUpCircle, Users, Activity, Cloud } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description:
        "Simulated attacks to uncover vulnerabilities before hackers do. Our expert team uses advanced techniques to identify security gaps.",
      link: "/services/penetration-testing",
    },
    {
      icon: Search,
      title: "Vulnerability Assessment",
      description:
        "Regular scans to detect and patch security weaknesses. Stay one step ahead of threats with proactive vulnerability management.",
      link: "/services/vulnerability-assessment",
    },
    {
      icon: ArrowUpCircle,
      title: "Incident Response & Forensics",
      description:
        "Rapid response to breaches and forensic investigations. Our team is ready 24/7 to handle security incidents when they occur.",
      link: "/services/incident-response",
    },
    {
      icon: Users,
      title: "Cyber Awareness Training",
      description:
        "Educating employees to recognize and prevent cyber threats. Transform your workforce into your strongest security asset.",
      link: "/services/cyber-awareness",
    },
    {
      icon: Activity,
      title: "SOC Services",
      description:
        "Our 24/7 Security Operations Center acts as your digital defense shield, monitoring threats in real-time with advanced tools.",
      link: "/services/soc-services",
    },
    {
      icon: Cloud,
      title: "Managed Security Services",
      description:
        "Let us take care of your security while you focus on business growth. Comprehensive protection for networks, devices, and cloud.",
      link: "/services/managed-security",
    },
  ]

  return (
    <section className="py-16 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions designed to protect your organization from evolving threats. We offer
            a full spectrum of services to secure your digital assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

