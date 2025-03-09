import {
  Shield,
  Search,
  ArrowUpCircle,
  Users,
  Activity,
  Cloud,
  Lock,
  Zap,
  Wifi,
  Database,
  RefreshCw,
  Eye,
} from "lucide-react"

export const servicesData = [
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    icon: Shield,
    description:
      "Simulated attacks to uncover vulnerabilities before hackers do. Our expert team uses advanced techniques to identify security gaps.",
    longDescription:
      "Our penetration testing service simulates real-world cyber attacks to identify vulnerabilities in your systems, applications, and networks before malicious actors can exploit them. Using the same tools and techniques as hackers, our certified ethical hackers conduct thorough assessments to discover security weaknesses.",
    image: "/service-1.svg?height=400&width=500",
    features: [
      {
        icon: Lock,
        title: "Web Application Testing",
        description:
          "Comprehensive security assessment of web applications for vulnerabilities like XSS, SQL injection, and authentication flaws.",
      },
      {
        icon: Wifi,
        title: "Network Penetration Testing",
        description:
          "Thorough evaluation of network security to identify misconfigurations, unpatched systems, and access control issues.",
      },
      {
        icon: Database,
        title: "Database Security Testing",
        description:
          "Assessment of database systems to identify weaknesses in configuration, access controls, and encryption implementations.",
      },
    ],
    benefits: [
      {
        title: "Identify Real Vulnerabilities",
        description: "Discover actual exploitable vulnerabilities that automated scans might miss.",
      },
      {
        title: "Reduce Security Risks",
        description: "Address vulnerabilities before they can be exploited by malicious actors.",
      },
      {
        title: "Meet Compliance Requirements",
        description: "Satisfy regulatory requirements for security testing in various industries.",
      },
    ],
    process: [
      {
        title: "Initial Scoping",
        description: "Define the scope, objectives, and boundaries of the penetration test.",
      },
      {
        title: "Reconnaissance",
        description: "Gather information about target systems using passive and active techniques.",
      },
      {
        title: "Vulnerability Analysis",
        description: "Identify potential security weaknesses in the target systems.",
      },
      {
        title: "Exploitation",
        description: "Attempt to exploit discovered vulnerabilities to assess their real-world impact.",
      },
      {
        title: "Reporting",
        description: "Document findings, impact assessments, and actionable remediation steps.",
      },
    ],
    relatedServices: ["vulnerability-assessment", "incident-response", "soc-services"],
  },
  {
    id: "vulnerability-assessment",
    title: "Vulnerability Assessment",
    icon: Search,
    description:
      "Regular scans to detect and patch security weaknesses. Stay one step ahead of threats with proactive vulnerability management.",
    longDescription:
      "Our Vulnerability Assessment service provides a systematic review of security weaknesses in your IT environment. We identify, quantify, and prioritize vulnerabilities across your systems and applications, helping you implement a proactive security strategy to address risks before they can be exploited.",
    image: "/service-2.svg?height=400&width=500",
    features: [
      {
        icon: Eye,
        title: "Comprehensive Scanning",
        description: "Thorough scanning of networks, systems, and applications to identify known vulnerabilities.",
      },
      {
        icon: Activity,
        title: "Risk Prioritization",
        description:
          "Analysis and prioritization of vulnerabilities based on severity, exploitability, and business impact.",
      },
      {
        icon: RefreshCw,
        title: "Regular Assessments",
        description: "Scheduled recurring assessments to maintain visibility of your security posture over time.",
      },
    ],
    benefits: [
      {
        title: "Proactive Risk Management",
        description: "Address vulnerabilities before they can be exploited by threat actors.",
      },
      {
        title: "Resource Optimization",
        description: "Focus security resources on the most critical vulnerabilities first.",
      },
      {
        title: "Continuous Improvement",
        description: "Track security posture improvements over time with regular assessments.",
      },
    ],
    process: [
      {
        title: "Discovery",
        description: "Identify all assets within scope for vulnerability assessment.",
      },
      {
        title: "Vulnerability Scanning",
        description: "Deploy scanning tools to detect known vulnerabilities across systems.",
      },
      {
        title: "Analysis & Verification",
        description: "Analyze results to remove false positives and verify findings.",
      },
      {
        title: "Risk Assessment",
        description: "Evaluate and prioritize vulnerabilities based on risk factors.",
      },
      {
        title: "Remediation Planning",
        description: "Develop actionable recommendations to address identified vulnerabilities.",
      },
    ],
    relatedServices: ["penetration-testing", "cyber-awareness", "managed-security"],
  },
  {
    id: "incident-response",
    title: "Incident Response & Forensics",
    icon: ArrowUpCircle,
    description:
      "Rapid response to breaches and forensic investigations. Our team is ready 24/7 to handle security incidents when they occur.",
    longDescription:
      "Our Incident Response & Forensics service provides expert assistance during cybersecurity incidents. Our team of security professionals is available 24/7 to help contain threats, investigate the cause, recover systems, and prevent future incidents through detailed forensic analysis and strategic recommendations.",
    image: "/service-3.png?height=400&width=500",
    features: [
      {
        icon: Zap,
        title: "Rapid Response",
        description: "24/7 availability with quick deployment of incident response teams when security events occur.",
      },
      {
        icon: Shield,
        title: "Threat Containment",
        description: "Swift action to isolate affected systems and prevent the spread of the incident.",
      },
      {
        icon: Search,
        title: "Digital Forensics",
        description: "In-depth investigation to determine the scope, timeline, and impact of the incident.",
      },
    ],
    benefits: [
      {
        title: "Minimize Damage",
        description: "Reduce the impact of security incidents through rapid containment and remediation.",
      },
      {
        title: "Preserve Evidence",
        description: "Professional collection and analysis of digital evidence for potential legal proceedings.",
      },
      {
        title: "Strategic Improvement",
        description: "Gain insights to strengthen security controls and prevent similar incidents.",
      },
    ],
    process: [
      {
        title: "Preparation",
        description: "Establish incident response procedures and communication channels.",
      },
      {
        title: "Detection & Analysis",
        description: "Identify and validate security incidents through monitoring and investigation.",
      },
      {
        title: "Containment",
        description: "Implement measures to limit the impact and prevent further damage.",
      },
      {
        title: "Eradication",
        description: "Remove threat actors from the environment and eliminate attack vectors.",
      },
      {
        title: "Recovery",
        description: "Restore affected systems and data to normal operation.",
      },
      {
        title: "Lessons Learned",
        description: "Document findings and implement improvements to prevent recurrence.",
      },
    ],
    relatedServices: ["soc-services", "penetration-testing", "managed-security"],
  },
  {
    id: "cyber-awareness",
    title: "Cyber Awareness Training",
    icon: Users,
    description:
      "Educating employees to recognize and prevent cyber threats. Transform your workforce into your strongest security asset.",
    longDescription:
      "Our Cyber Awareness Training transforms your employees from security vulnerabilities into your first line of defense. Through engaging, interactive training programs, we educate your team on recognizing and responding to common cyber threats like phishing, social engineering, and poor password practices.",
    image: "/service-4.png?height=400&width=500",
    features: [
      {
        icon: Users,
        title: "Interactive Learning",
        description: "Engaging, scenario-based training modules that simulate real-world cyber threats.",
      },
      {
        icon: Activity,
        title: "Phishing Simulations",
        description: "Controlled phishing campaigns to test employee awareness and response.",
      },
      {
        icon: RefreshCw,
        title: "Continuous Education",
        description: "Regular updates and refresher courses to address evolving threats.",
      },
    ],
    benefits: [
      {
        title: "Reduce Human Error",
        description: "Minimize security incidents caused by employee mistakes or lack of awareness.",
      },
      {
        title: "Build Security Culture",
        description: "Foster a culture where security is everyone's responsibility.",
      },
      {
        title: "Measurable Improvement",
        description: "Track progress through assessment metrics and reduced incident rates.",
      },
    ],
    process: [
      {
        title: "Assessment",
        description: "Evaluate current security awareness levels and identify knowledge gaps.",
      },
      {
        title: "Customized Program",
        description: "Develop training content tailored to your organization's specific needs.",
      },
      {
        title: "Implementation",
        description: "Deploy training through various channels including e-learning and workshops.",
      },
      {
        title: "Testing & Simulation",
        description: "Conduct phishing simulations and knowledge assessments.",
      },
      {
        title: "Analysis & Refinement",
        description: "Review results and refine the program for continuous improvement.",
      },
    ],
    relatedServices: ["vulnerability-assessment", "penetration-testing", "managed-security"],
  },
  {
    id: "soc-services",
    title: "SOC Services",
    icon: Activity,
    description:
      "Our 24/7 Security Operations Center acts as your digital defense shield, monitoring threats in real-time with advanced tools.",
    longDescription:
      "Our Security Operations Center (SOC) provides round-the-clock monitoring and management of your security infrastructure. Our team of analysts uses advanced detection technologies to identify, analyze, and respond to security incidents in real-time, ensuring your organization is protected against emerging threats.",
    image: "/service-5.png?height=400&width=500",
    features: [
      {
        icon: Activity,
        title: "24/7 Monitoring",
        description: "Continuous surveillance of your environment for security events and anomalies.",
      },
      {
        icon: Shield,
        title: "Threat Detection",
        description: "Advanced tools and techniques to identify known and unknown threats.",
      },
      {
        icon: Zap,
        title: "Incident Response",
        description: "Rapid investigation and containment of security incidents when detected.",
      },
    ],
    benefits: [
      {
        title: "Comprehensive Protection",
        description: "Constant vigilance across your entire IT infrastructure.",
      },
      {
        title: "Rapid Response",
        description: "Immediate action when threats are detected to minimize damage.",
      },
      {
        title: "Cost Efficiency",
        description: "Enterprise-grade security operations without the cost of building an in-house SOC.",
      },
    ],
    process: [
      {
        title: "Integration",
        description: "Connect your security tools and systems to our SOC platform.",
      },
      {
        title: "Monitoring",
        description: "Continuous surveillance of security events across your environment.",
      },
      {
        title: "Detection",
        description: "Identification of potential security incidents through correlation and analysis.",
      },
      {
        title: "Triage & Investigation",
        description: "Assessment of detected events to determine severity and scope.",
      },
      {
        title: "Response",
        description: "Implementation of containment and remediation actions for confirmed incidents.",
      },
      {
        title: "Reporting",
        description: "Regular updates on security posture and incident management.",
      },
    ],
    relatedServices: ["incident-response", "managed-security", "penetration-testing"],
  },
  {
    id: "managed-security",
    title: "Managed Security Services",
    icon: Cloud,
    description:
      "Let us take care of your security while you focus on business growth. Comprehensive protection for networks, devices, and cloud.",
    longDescription:
      "Our Managed Security Services provide comprehensive, ongoing security management for your organization. We handle everything from firewall and endpoint protection to cloud security and dark web monitoring, allowing your team to focus on core business activities while we ensure your digital assets remain protected.",
    image: "/service-6.png?height=400&width=500",
    features: [
      {
        icon: Shield,
        title: "Firewall & Endpoint Security",
        description: "Management and monitoring of firewalls and endpoint protection solutions.",
      },
      {
        icon: Cloud,
        title: "Cloud Security",
        description: "Protection for cloud-based infrastructure, applications, and data.",
      },
      {
        icon: Eye,
        title: "Dark Web Monitoring",
        description: "Surveillance of dark web for leaked credentials and sensitive information.",
      },
    ],
    benefits: [
      {
        title: "Reduced Complexity",
        description: "Simplify security management with a single trusted partner.",
      },
      {
        title: "Proactive Protection",
        description: "Stay ahead of threats with the latest security technologies and expertise.",
      },
      {
        title: "Scalable Security",
        description: "Easily adjust security services as your business needs evolve.",
      },
    ],
    process: [
      {
        title: "Assessment",
        description: "Evaluate your current security posture and identify requirements.",
      },
      {
        title: "Design",
        description: "Develop a tailored security strategy aligned with your business needs.",
      },
      {
        title: "Implementation",
        description: "Deploy and configure security solutions across your environment.",
      },
      {
        title: "Management",
        description: "Ongoing administration and monitoring of security controls.",
      },
      {
        title: "Optimization",
        description: "Continuous improvement of security posture through regular reviews.",
      },
    ],
    relatedServices: ["soc-services", "vulnerability-assessment", "incident-response"],
  },
]

