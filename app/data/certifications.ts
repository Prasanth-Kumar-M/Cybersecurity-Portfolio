export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    name: "(ISC)² Certified in Cybersecurity (CC)",
    issuer: "(ISC)²",
    date: "2024-08",
    category: "Cybersecurity Foundation",
  },
  {
    id: "2",
    name: "AWS Security Fundamentals (Second Edition)",
    issuer: "Amazon Web Services (AWS)",
    date: "2024-07",
    category: "Cloud Security",
  },
  {
    id: "3",
    name: "AWS Networking Practical Approaches",
    issuer: "Amazon Web Services (AWS)",
    date: "2024-06",
    category: "Cloud Networking",
  },
  {
    id: "4",
    name: "DROP Certified Security Course (DCSC)",
    issuer: "DROP",
    date: "2024-05",
    category: "Security Training",
  },
  {
    id: "5",
    name: "OSINT CTRL ALT ACT",
    issuer: "OSINT Training Provider",
    date: "2024-04",
    category: "OSINT & Reconnaissance",
  },
  {
    id: "6",
    name: "Full Stack Python Development",
    issuer: "Training Provider",
    date: "2024-03",
    category: "Software Development",
  },
  {
    id: "7",
    name: "CompTIA Security+ (In Progress)",
    issuer: "CompTIA",
    date: "2026-02",
    category: "Cybersecurity",
  },
];

export const conferences = [
  {
    id: "1",
    name: "BSidesPGH 2025",
    role: "Attendee & CTF Participant",
    date: "2025-03",
    description: "Attended security conference and participated in capture the flag competition",
  },
  {
    id: "2",
    name: "THRISS 2025",
    role: "CTF Participant",
    date: "2025-03",
    description: "Participated in cybersecurity challenges and CTF competition",
  },
];

export const practicalExperience = [
  {
    id: "1",
    platform: "HackTheBox",
    description: "Active practice on offensive security labs and vulnerable machines",
    category: "CTF & Training Platforms",
  },
  {
    id: "2",
    platform: "TryHackMe",
    description: "Continuous learning through guided security challenges and rooms",
    category: "CTF & Training Platforms",
  },
  {
    id: "3",
    platform: "CloudIRTriad (Instagram)",
    description: "120-day purple team and cloud IR learning journey with 1,000+ followers",
    category: "Community & Education",
  },
  {
    id: "4",
    platform: "AWS Security Labs",
    description: "Hands-on cloud security practice with EC2, S3, IAM, GuardDuty, CloudTrail",
    category: "Cloud Security Practice",
  },
];
