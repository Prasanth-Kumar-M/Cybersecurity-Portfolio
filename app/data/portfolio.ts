export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  fullDescription: string;
  objective?: string;
  tools: string[];
  methodology?: string;
  outcomes?: string[];
  lessonsLearned?: string;
  skills: string[];
  featured: boolean;
  imageUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level?: "Expert" | "Advanced" | "Proficient";
  description?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Red Teaming" | "Cloud Security" | "Research" | "Technology" | "CTF Writeup";
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
  tags: string[];
  imageUrl?: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  welcomeMessage: string;
  about: string;
  email: string;
  linkedin?: string;
  github?: string;
  medium?: string;
  instagram?: string;
  youtube?: string;
}

// Portfolio data
export const portfolioData: PortfolioData = {
  name: "Prasanth Kumar Malleboina",
  title: "Purple Teamer | Blue & Red Team Hybrid | (ISC)² CC | Cloud Incident Response | Cybersecurity and Tech Blogger",
  tagline: "Cloud Security | Offensive Security",
  welcomeMessage:
    "Currently, I am delving into purple team strategies through the creation of cloud IR labs in AWS, simulating real-world attacks, and sharing my journey with a growing audience on Instagram. Always curious and learning — whether it's building custom AWS attack/defense scenarios, participating in CTF competitions, or developing security automation tools — I thrive at the intersection of technology, security, and education.",
  about:
    "Cybersecurity professional with around 3 years of combined experience across IT support, SOC operations, penetration testing, and AWS security labs. Currently building out purple team skills through hands-on cloud IR labs while documenting the process for followers on Instagram. Background includes finding and reporting OWASP vulnerabilities during client assessments, triaging SIEM alerts in a SOC environment, and building detection content mapped to MITRE ATT&CK. Comfortable with Burp Suite, Nessus, AWS services (GuardDuty, CloudTrail, IAM), and scripting in Python and Bash.",
  email: "prasanthkumarmalleboina@gmail.com",
  linkedin: "https://www.linkedin.com/in/prasanth-kumar-malleboina/",
  github: "https://github.com/Prasanth-Kumar-M",
  medium: "https://medium.com/@prasanthkumarmalleboiena",
  instagram: "https://www.instagram.com/cloudirtriad/",
  youtube: "https://youtube.com/@cloudirtriad",
};

export const skills: Skill[] = [
  // Cloud Security & Penetration Testing
  {
    id: "1",
    name: "AWS Security",
    category: "Cloud Security & Cloud Penetration Testing",
    level: "Advanced",
    description: "GuardDuty, CloudTrail, IAM, S3, EC2, Lambda, VPC, CloudWatch - Cloud IR labs, attack simulations, detection engineering",
  },
  {
    id: "2",
    name: "Microsoft Azure",
    category: "Cloud Security & Cloud Penetration Testing",
    level: "Proficient",
    description: "Log Analytics, Azure security services",
  },
  {
    id: "3",
    name: "Infrastructure as Code (IaC)",
    category: "Cloud Security & Cloud Penetration Testing",
    level: "Proficient",
    description: "Terraform, CloudFormation security review and implementation",
  },
  {
    id: "4",
    name: "Cloud Incident Response",
    category: "Cloud Security & Cloud Penetration Testing",
    level: "Advanced",
    description: "Purple team cloud IR labs, attack/defense scenarios, detection playbooks",
  },
  // Penetration Testing & Offensive Security
  {
    id: "5",
    name: "Web Application Testing",
    category: "Penetration Testing & Offensive Security",
    level: "Advanced",
    description: "OWASP Top 10: SQL Injection, XSS, CSRF, IDOR, Authentication bypass - discovered critical vulnerabilities across 8 client applications",
  },
  {
    id: "6",
    name: "Burp Suite Professional",
    category: "Penetration Testing & Offensive Security",
    level: "Advanced",
    description: "Repeater, Intruder, Scanner - primary tool for web app security testing",
  },
  {
    id: "7",
    name: "Metasploit Framework",
    category: "Penetration Testing & Offensive Security",
    level: "Advanced",
    description: "Exploitation framework, payload generation, post-exploitation",
  },
  {
    id: "8",
    name: "Vulnerability Assessment",
    category: "Penetration Testing & Offensive Security",
    level: "Advanced",
    description: "Nessus scanning, vulnerability analysis, patch validation - 95% successful closure rate",
  },
  {
    id: "9",
    name: "Network Analysis",
    category: "Penetration Testing & Offensive Security",
    level: "Advanced",
    description: "Wireshark, Nmap, IDS/IPS systems, network service scanning",
  },
  // Threat Emulation, Automation & Security Engineering
  {
    id: "10",
    name: "Purple Teaming",
    category: "Threat Emulation, Automation & Security Engineering",
    level: "Advanced",
    description: "Building attack/defense scenarios, detection engineering, combining red and blue team methodologies",
  },
  {
    id: "11",
    name: "MITRE ATT&CK",
    category: "Threat Emulation, Automation & Security Engineering",
    level: "Advanced",
    description: "Mapping detections to techniques, threat modeling, attack pattern recognition (T1110, T1046)",
  },
  {
    id: "12",
    name: "Detection Engineering",
    category: "Threat Emulation, Automation & Security Engineering",
    level: "Advanced",
    description: "Writing detection rules, SIEM alert tuning, reducing false positives, building detection content",
  },
  {
    id: "13",
    name: "Python Development",
    category: "Threat Emulation, Automation & Security Engineering",
    level: "Advanced",
    description: "Security automation, ML-based IDS (92% accuracy), Flask APIs, Pandas, NumPy, Scikit-learn",
  },
  {
    id: "14",
    name: "Bash/Shell Scripting",
    category: "Threat Emulation, Automation & Security Engineering",
    level: "Advanced",
    description: "Automation scripts, system administration, security tooling",
  },
  {
    id: "15",
    name: "PowerShell",
    category: "Threat Emulation, Automation & Security Engineering",
    level: "Advanced",
    description: "Windows automation, security operations, Active Directory management",
  },
  {
    id: "16",
    name: "Security Automation",
    category: "Threat Emulation, Automation & Security Engineering",
    level: "Advanced",
    description: "CTF automation, security lab setup, detection rule automation",
  },
  // SOC & Security Operations
  {
    id: "17",
    name: "SIEM Operations",
    category: "SOC & Security Operations",
    level: "Advanced",
    description: "Splunk, Elastic Cloud - monitored 50-60 alerts daily, log correlation, threat detection",
  },
  {
    id: "18",
    name: "Incident Response",
    category: "SOC & Security Operations",
    level: "Advanced",
    description: "Alert investigation, IOC documentation, containment procedures, IR playbooks",
  },
  {
    id: "19",
    name: "Threat Hunting",
    category: "SOC & Security Operations",
    level: "Proficient",
    description: "Proactive threat detection, anomaly identification, pattern recognition",
  },
  // Security Frameworks & Methodologies
  {
    id: "20",
    name: "Security Frameworks",
    category: "Security Frameworks & Methodologies",
    level: "Advanced",
    description: "NIST Cybersecurity Framework, OWASP Top 10, CIS Controls, Zero Trust Architecture, SANS Top 25",
  },
  {
    id: "21",
    name: "Risk Assessment",
    category: "Security Frameworks & Methodologies",
    level: "Advanced",
    description: "CVSS scoring, vulnerability prioritization, security auditing",
  },
  // Systems & Infrastructure
  {
    id: "22",
    name: "Active Directory",
    category: "Systems & Infrastructure",
    level: "Advanced",
    description: "User management, GPO configuration, security group administration, event log analysis - 500+ tickets resolved",
  },
  {
    id: "23",
    name: "Windows Server",
    category: "Systems & Infrastructure",
    level: "Advanced",
    description: "Windows Server 2022, user administration, security configuration",
  },
  {
    id: "24",
    name: "Linux Administration",
    category: "Systems & Infrastructure",
    level: "Advanced",
    description: "Ubuntu, Kali Linux, system security, vulnerability management",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    slug: "ml-network-intrusion-detection",
    title: "Machine Learning-Based Network Intrusion Detection System",
    category: "Security Research",
    date: "2024-06",
    description:
      "Built a network IDS using supervised machine learning with SVM and Random Forest classifiers on the NSL-KDD dataset, achieving 92% accuracy and 80% F1-score with 6% false positive rate.",
    fullDescription:
      "Developed a comprehensive network intrusion detection system leveraging machine learning algorithms to identify malicious network traffic patterns. Trained on 112,673 samples with 35 features including protocol types, service flags, byte counts, and duration metrics.",
    objective:
      "Create an intelligent IDS capable of detecting various attack patterns including DoS, brute-force, port scans, and credential misuse with high accuracy and low false positive rates.",
    tools: [
      "Python",
      "Scikit-learn",
      "AWS EC2",
      "SVM",
      "Random Forest",
      "SMOTE",
      "StandardScaler",
      "NSL-KDD Dataset",
    ],
    methodology:
      "Dataset preparation and feature engineering → Model selection and training (SVM, Random Forest) → Cross-validation and hyperparameter tuning → Attack simulation → MITRE ATT&CK mapping → AWS deployment",
    outcomes: [
      "Achieved 92% accuracy and 80% F1-score with 6% false positive rate after feature engineering and model optimization",
      "Used StandardScaler for normalization, SMOTE for class balancing, and 5-fold cross-validation for robust model evaluation",
      "Simulated attack traffic including DoS floods, brute-force attempts on SSH/RDP, port scans, and credential misuse",
      "Mapped detected anomalies to MITRE ATT&CK techniques: T1110 (Brute Force) and T1046 (Network Service Scanning)",
      "Deployed on AWS EC2 (t3.medium) with Python pipeline processing 1000+ flows per second",
      "Generated structured alerts with confidence scores, attack classifications, and actionable recommendations for SOC teams",
    ],
    lessonsLearned:
      "Machine learning models require careful feature selection and balancing to achieve production-ready performance. Mapping ML detections to industry frameworks like MITRE ATT&CK significantly improves SOC analyst understanding and response workflows. Cloud deployment considerations include throughput optimization and scalable alert processing.",
    skills: [
      "Python Development",
      "Security Automation",
      "AWS Security",
      "MITRE ATT&CK",
      "Detection Engineering",
    ],
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
  {
    id: "2",
    slug: "cryptographic-evoting-platform",
    title: "Cryptographic E-Voting Platform with Zero-Knowledge Proofs",
    category: "Security Research",
    date: "2025-01",
    description:
      "Built a secure e-voting system using PGP encryption (2048-bit RSA), digital signatures (RSA-PSS), and Zero-Knowledge Proof concepts to ensure ballot confidentiality and voter authentication.",
    fullDescription:
      "Developed a full-stack prototype e-voting platform implementing advanced cryptographic techniques to address key e-voting security challenges: ballot secrecy, voter authentication, double-voting prevention, and coercion resistance.",
    objective:
      "Create a cryptographically secure voting system that ensures ballot confidentiality, verifiable voting, tamper detection, and resistance to common attack vectors.",
    tools: [
      "Python",
      "Flask",
      "PGP Encryption",
      "RSA (2048-bit)",
      "RSA-PSS",
      "HTML/CSS/JavaScript",
      "RESTful APIs",
      "Burp Suite",
    ],
    methodology:
      "Security requirements analysis → Cryptographic protocol design → Backend development (Flask) → Frontend implementation → Security controls integration → Threat modeling (STRIDE) → Penetration testing",
    outcomes: [
      "Implemented PGP encryption (2048-bit RSA) for ballot confidentiality and RSA-PSS digital signatures for voter authentication",
      "Integrated Zero-Knowledge Proof concepts allowing voters to verify their vote was counted without revealing their choice",
      "Built cryptographic commitments to prevent double voting and hash chains for tamper detection",
      "Developed full-stack solution: Flask backend with RESTful API + responsive HTML/CSS/JS frontend",
      "Implemented comprehensive security controls: rate limiting, input validation, SQL injection prevention, XSS filtering, CSRF tokens",
      "Conducted security testing using STRIDE threat modeling framework and hands-on pentesting with Burp Suite",
      "Validated resilience against authentication bypass, session hijacking, cryptographic manipulation, timing attacks, and nonce reuse",
    ],
    lessonsLearned:
      "Cryptographic systems require defense-in-depth approaches combining multiple security layers. Zero-knowledge proofs provide powerful privacy guarantees but require careful implementation. Comprehensive security testing must address both cryptographic and traditional web application vulnerabilities.",
    skills: [
      "Python Development",
      "Security Engineering",
      "Web Application Testing",
      "Burp Suite Professional",
    ],
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: "3",
    slug: "aws-security-lab",
    title: "AWS Security Lab - Cloud Attack & Detection",
    category: "Cloud Security",
    date: "2025-02",
    description:
      "Built comprehensive AWS security lab environment simulating cloud attacks with corresponding detection rules using GuardDuty, CloudTrail, and Elastic Stack for centralized logging.",
    fullDescription:
      "Designed and implemented a hands-on AWS security laboratory for practicing purple team methodologies, combining offensive attack simulations with defensive detection engineering.",
    objective:
      "Create a realistic AWS environment for learning cloud security through practical attack/defense scenarios covering IAM, S3, EC2, and Lambda services.",
    tools: [
      "AWS EC2",
      "AWS S3",
      "AWS IAM",
      "AWS CloudTrail",
      "AWS GuardDuty",
      "AWS Lambda",
      "Elastic Stack",
      "CloudWatch",
    ],
    methodology:
      "Lab infrastructure setup → Attack scenario development → Attack execution and documentation → Detection rule creation → Response playbook development → Content sharing",
    outcomes: [
      "Configured complete AWS security stack: EC2, S3, IAM, CloudTrail, GuardDuty for attack simulation and detection",
      "Implemented Elastic Stack for centralized logging and security event correlation",
      "Developed attack scenarios: IAM privilege escalation, S3 bucket misconfigurations, EC2 instance compromise, suspicious Lambda invocations",
      "Created detection rules for each attack path mapped to cloud security best practices",
      "Built purple team playbooks combining red team attack documentation with blue team detection and response procedures",
      "Shared learning journey with 1,000+ Instagram followers documenting real-world cloud security techniques",
    ],
    lessonsLearned:
      "Cloud security requires understanding both offensive techniques and defensive controls. Purple team methodologies accelerate security skill development by connecting attack patterns to detections. Sharing security knowledge builds community and reinforces learning.",
    skills: [
      "AWS Security",
      "Cloud Incident Response",
      "Purple Teaming",
      "Detection Engineering",
      "MITRE ATT&CK",
    ],
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: "4",
    slug: "ctf-competitions",
    title: "CTF Competitions & Continuous Security Practice",
    category: "CTF & Training",
    date: "2025-03",
    description:
      "Active participation in CTF competitions including BSidesPGH and THRISS 2025, solving 12+ challenges across web exploitation, cryptography, reverse engineering, and forensics.",
    fullDescription:
      "Engaged in competitive cybersecurity challenges to develop hands-on offensive security skills across multiple domains while maintaining continuous learning through HackTheBox and TryHackMe platforms.",
    objective:
      "Develop practical offensive security skills through competitive challenges and structured learning platforms, focusing on real-world exploitation techniques.",
    tools: [
      "Burp Suite",
      "Python",
      "Ghidra",
      "radare2",
      "HackTheBox",
      "TryHackMe",
      "Various CTF Tools",
    ],
    methodology:
      "CTF participation → Challenge analysis → Tool selection and exploit development → Automation scripting → Continuous practice on training platforms",
    outcomes: [
      "Participated in BSidesPGH 2025 and THRISS 2025 CTF competitions",
      "Solved approximately 12 challenges across multiple categories",
      "Web Exploitation: SQL Injection (SQLi), Cross-Site Scripting (XSS), CSRF, Server-Side Request Forgery (SSRF)",
      "Cryptography: RSA and AES cryptographic challenges",
      "Reverse Engineering: Binary analysis using Ghidra and radare2",
      "Forensics: Digital evidence analysis and investigation",
      "Developed Python automation scripts to accelerate challenge solving and exploit development",
      "Maintain active HackTheBox and TryHackMe accounts for ongoing offensive security practice",
    ],
    lessonsLearned:
      "CTF competitions accelerate learning by providing focused, time-pressured problem-solving scenarios. Automation significantly enhances efficiency in repetitive exploitation tasks. Continuous practice through training platforms maintains and expands offensive security capabilities.",
    skills: [
      "Web Application Testing",
      "Python Development",
      "Security Automation",
      "Penetration Testing & Offensive Security",
    ],
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
];
