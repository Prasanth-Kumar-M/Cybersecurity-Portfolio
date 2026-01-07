export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  type: "Full-time" | "Internship" | "Contract";
  location: string;
  period: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    id: "1",
    company: "CloudIRTriad",
    role: "Cybersecurity Educator & Purple Team Specialist",
    type: "Full-time",
    location: "Remote",
    period: "Oct 2025 - Present",
    startDate: "2025-10",
    endDate: "Present",
    description:
      "Running a 120-day purple teaming and cloud IR journey documenting AWS security labs, attack simulations, and detection engineering for approximately 1,000 followers on Instagram. Creating practical content covering GuardDuty alerts, CloudTrail log analysis, IAM privilege escalation simulations, and corresponding detection rules.",
    achievements: [
      "Built several AWS lab scenarios from scratch including S3 bucket exploitation, EC2 instance compromise, and suspicious Lambda invocations",
      "Created comprehensive red team attack steps paired with blue team detection/response playbooks for each scenario",
      "Documenting hands-on cloud incident response techniques and purple team methodologies for growing audience of security professionals",
      "Developed reusable AWS security lab templates for common attack patterns and detection scenarios",
    ],
    technologies: [
      "AWS (GuardDuty, CloudTrail, IAM, S3, EC2, Lambda)",
      "CloudWatch",
      "MITRE ATT&CK",
      "Purple Teaming",
      "Incident Response",
      "Detection Engineering",
    ],
  },
];

export const internships: WorkExperience[] = [
  {
    id: "2",
    company: "Cyber Secured India",
    role: "Penetration Testing Intern",
    type: "Internship",
    location: "Remote",
    period: "Apr 2024 - Sep 2024",
    startDate: "2024-04",
    endDate: "2024-09",
    description:
      "Conducted comprehensive web application security assessments for 8 client applications using industry-standard penetration testing methodologies. Identified and documented critical vulnerabilities including SQL injection, XSS, CSRF, broken authentication, and IDOR bugs.",
    achievements: [
      "Tested 8 client web applications, discovering SQL injection vulnerabilities that allowed database credential extraction, XSS capable of session cookie theft, and multiple CSRF issues",
      "Performed reconnaissance using Burp Suite Pro (Repeater/Intruder), identifying outdated WordPress plugins with known CVEs, exposed admin panels with default credentials, and IDOR vulnerabilities allowing unauthorized account access",
      "Authored detailed penetration test reports with executive summaries, CVSS scores, proof-of-concept code, and prioritized remediation steps",
      "Collaborated with development teams during remediation phase, conducting retesting after patches and achieving 100% closure rate for critical/high severity findings",
      "Discovered unauthenticated database access on one client application, enabling complete data exposure",
    ],
    technologies: [
      "Burp Suite Professional",
      "Wappalyzer",
      "OWASP Top 10",
      "SQL Injection",
      "XSS",
      "CSRF",
      "IDOR",
      "CVE Analysis",
      "WordPress Security",
      "CVSS Scoring",
    ],
  },
  {
    id: "3",
    company: "SmartInternz",
    role: "Cybersecurity Intern - SOC Operations",
    type: "Internship",
    location: "Remote",
    period: "Feb 2024 - May 2024",
    startDate: "2024-02",
    endDate: "2024-05",
    description:
      "Gained hands-on experience in Security Operations Center (SOC) operations, monitoring SIEM platforms, investigating security alerts, and performing vulnerability management. Built and maintained cyber lab infrastructure for blue team training exercises.",
    achievements: [
      "Monitored SIEM platforms daily, reviewing 50-60 alerts per day and learning to distinguish false positives from genuine threats including repeated failed logins, off-hours access attempts, and unusual account lockout spikes",
      "Investigated security alerts related to brute-force attacks on RDP/SSH, credential stuffing campaigns, and malware signatures in simulated environments, documenting incidents with affected systems, timestamps, IOCs, and containment procedures",
      "Designed and maintained VirtualBox-based cyber lab for blue team training with pre-configured logging and reusable VM templates, reducing setup time by 40%",
      "Conducted post-patch validation scans with Nessus on Windows and Linux systems, achieving 95% successful vulnerability closure rate with comprehensive tracking",
      "Contributed to SOC knowledge base by documenting common alert types, triage procedures, escalation criteria, and learning threat hunting techniques from senior analysts",
      "Assisted in tuning detection rules to reduce alert noise and improve signal-to-noise ratio",
    ],
    technologies: [
      "Splunk",
      "Elastic Cloud (SIEM)",
      "Nessus",
      "VirtualBox",
      "Incident Response",
      "Threat Hunting",
      "Vulnerability Management",
      "MITRE ATT&CK",
      "Windows/Linux Security",
    ],
  },
  {
    id: "4",
    company: "Loyola Institute of Technology and Management",
    role: "Student IT Help Desk Specialist",
    type: "Full-time",
    location: "Guntur, India",
    period: "Mar 2022 - May 2023",
    startDate: "2022-03",
    endDate: "2023-05",
    description:
      "Provided comprehensive IT support for campus environment with ~2,000 users, managing Active Directory administration, user account lifecycle, Group Policy configuration, and security awareness training.",
    achievements: [
      "Resolved 500+ support tickets focused on Active Directory operations including user account creation, password resets, group membership management, and GPO configuration",
      "Managed Windows Server 2022 environment for user administration, organizing OUs, configuring security groups, and troubleshooting login issues and policy conflicts through event log analysis",
      "Delivered security awareness training sessions for students and staff, reducing repeat security incidents by approximately 40%",
      "Maintained 95%+ first-contact resolution rate for hardware, software, OS, and network connectivity issues across Windows, macOS, and Linux systems",
      "Successfully supported MFA rollout across campus environment during mid-year implementation",
    ],
    technologies: [
      "Active Directory",
      "Windows Server 2022",
      "Group Policy Objects (GPO)",
      "Multi-Factor Authentication (MFA)",
      "Windows/macOS/Linux",
      "Security Awareness",
    ],
  },
  {
    id: "5",
    company: "Loyola Institute of Technology and Management",
    role: "Computer Lab Assistant",
    type: "Full-time",
    location: "Guntur, India",
    period: "Aug 2021 - Feb 2022",
    startDate: "2021-08",
    endDate: "2022-02",
    description:
      "Maintained computer lab infrastructure with approximately 100 workstations, ensuring system health, security patch deployment, and policy enforcement.",
    achievements: [
      "Performed daily maintenance on ~100 lab workstations including system health checks, security patch deployment, antivirus signature updates, and proactive issue resolution",
      "Enforced IT security policies and monitored for suspicious activity or misconfigurations",
      "Provided user support for login issues, software installation (MATLAB, Python IDEs), and general troubleshooting",
      "Maintained comprehensive ticketing system to track issues and identify recurring problems for continuous service improvement",
    ],
    technologies: [
      "Windows Administration",
      "Patch Management",
      "Antivirus Management",
      "IT Security Policy",
      "Ticketing Systems",
    ],
  },
];
