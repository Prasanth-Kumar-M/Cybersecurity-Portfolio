import { Link } from "react-router";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Youtube,
  Code2,
  Shield,
  Cloud,
  Target,
  Award,
  BookOpen,
} from "lucide-react";
import type { Route } from "./+types/home";
import styles from "./home.module.css";
import { portfolioData, projects, skills } from "~/data/portfolio";
import { certifications, conferences, practicalExperience } from "~/data/certifications";
import { blogPosts } from "~/data/blog";
import { workExperiences, internships } from "~/data/experience";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${portfolioData.name} - ${portfolioData.title}` },
    {
      name: "description",
      content: portfolioData.welcomeMessage,
    },
  ];
}

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredBlogs = blogPosts.filter((b) => b.featured).slice(0, 3);
  const recentCertifications = certifications.slice(0, 6);

  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Offensive Operations":
        return <Target className={styles.categoryIcon} />;
      case "Cloud Security":
        return <Cloud className={styles.categoryIcon} />;
      case "Automation & Tooling":
        return <Code2 className={styles.categoryIcon} />;
      case "Tools & Frameworks":
        return <Shield className={styles.categoryIcon} />;
      default:
        return <Shield className={styles.categoryIcon} />;
    }
  };

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <Shield className={styles.logoIcon} />
            <span className={styles.logoText}>Prasanth Kumar Portfolio</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#about" className={styles.navLink}>
              About
            </a>
            <a href="#skills" className={styles.navLink}>
              Skills
            </a>
            <a href="#experience" className={styles.navLink}>
              Experience
            </a>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
            <a href="#certifications" className={styles.navLink}>
              Certifications
            </a>
            <Link to="/blog" className={styles.navLink}>
              Blog
            </Link>
            <a href="mailto: prasanthkumarmalleboina@gmail.com" className={styles.navLink} target="_self">
              Contact
            </a>
          </div>
          <div className={styles.socialIcons}>
            {portfolioData.medium && (
              <a
                href="https://medium.com/@prasanthkumarmalleboiena"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Medium"
              >
                <BookOpen size={20} />
              </a>
            )}
            {portfolioData.linkedin && (
              <a
                href="https://www.linkedin.com/in/prasanth-kumar-malleboina/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            {portfolioData.github && (
              <a
                href="https://github.com/Prasanth-Kumar-M"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {portfolioData.instagram && (
              <a
                href="https://www.instagram.com/cloudirtriad/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            )}
            {portfolioData.youtube && (
              <a
                href={portfolioData.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Top 0.01% Cybersecurity Professional</div>
          <h1 className={styles.name}>Prasanth Kumar Malleboina</h1>
          <h2 className={styles.professionalTitle}>{portfolioData.title}</h2>
          <p className={styles.tagline}>{portfolioData.tagline}</p>
          <p className={styles.welcomeMessage}>{portfolioData.welcomeMessage}</p>
          <div className={styles.heroActions}>
            <a href="#projects" className={styles.primaryButton}>
              View Projects
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Get In Touch
            </a>
          </div>
        </div>
        <div className={styles.heroBackground}>
          <div className={styles.gridOverlay}></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.aboutContainer}>
          <p className={styles.aboutContent}>
            Cybersecurity professional with around 3 years of combined experience across IT support, SOC operations,
            penetration testing, and AWS security labs. Currently building out purple team skills through hands-on cloud
            IR labs while documenting the process for followers on Instagram. Background includes finding and reporting
            OWASP vulnerabilities during client assessments, triaging SIEM alerts in a SOC environment, and building
            detection content mapped to MITRE ATT&CK. Comfortable with Burp Suite, Nessus, AWS services (GuardDuty,
            CloudTrail, IAM), and scripting in Python and Bash.
          </p>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>~3 Years</div>
              <div className={styles.statLabel}>Cybersecurity Experience</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>8</div>
              <div className={styles.statLabel}>Client Pentests</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>50-60</div>
              <div className={styles.statLabel}>Daily SIEM Alerts Reviewed</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>Vulnerability Closure Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Core Competencies</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.skillsGrid}>
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className={styles.skillCategory}>
              <div className={styles.categoryHeader}>
                {getCategoryIcon(category)}
                <h3 className={styles.categoryTitle}>{category}</h3>
              </div>
              <div className={styles.skillsList}>
                {categorySkills.map((skill) => (
                  <div key={skill.id} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      {skill.level && <span className={styles.skillLevel}>{skill.level}</span>}
                    </div>
                    {skill.description && <p className={styles.skillDescription}>{skill.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.experienceContainer}>
          {/* Full-time Experience */}
          {workExperiences.map((exp) => (
            <article key={exp.id} className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div className={styles.experienceTitle}>
                  <h3 className={styles.experienceRole}>{exp.role}</h3>
                  <div className={styles.experienceCompany}>
                    {exp.company} • {exp.location}
                  </div>
                </div>
                <div className={styles.experienceMeta}>
                  <span className={styles.experiencePeriod}>{exp.period}</span>
                  <span className={styles.experienceType}>{exp.type}</span>
                </div>
              </div>
              <p className={styles.experienceDescription}>{exp.description}</p>
              <div className={styles.experienceAchievements}>
                <h4 className={styles.achievementsTitle}>Key Achievements:</h4>
                <ul className={styles.achievementsList}>
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className={styles.achievementItem}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.experienceTechnologies}>
                {exp.technologies.map((tech, index) => (
                  <span key={index} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}

          {/* Internship Experience */}
          <div className={styles.internshipsHeader}>
            <h3 className={styles.internshipsTitle}>Internship Experience</h3>
          </div>
          {internships.map((exp) => (
            <article key={exp.id} className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div className={styles.experienceTitle}>
                  <h3 className={styles.experienceRole}>{exp.role}</h3>
                  <div className={styles.experienceCompany}>
                    {exp.company} • {exp.location}
                  </div>
                </div>
                <div className={styles.experienceMeta}>
                  <span className={styles.experiencePeriod}>{exp.period}</span>
                  <span className={styles.experienceType}>{exp.type}</span>
                </div>
              </div>
              <p className={styles.experienceDescription}>{exp.description}</p>
              <div className={styles.experienceAchievements}>
                <h4 className={styles.achievementsTitle}>Key Achievements:</h4>
                <ul className={styles.achievementsList}>
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className={styles.achievementItem}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.experienceTechnologies}>
                {exp.technologies.map((tech, index) => (
                  <span key={index} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Engagements</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <p className={styles.sectionDescription}>
          Real-world offensive security engagements showcasing advanced red teaming, cloud security assessments, and
          security research initiatives.
        </p>
        <div className={styles.projectsGrid}>
          {featuredProjects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              {project.imageUrl && (
                <div className={styles.projectImageContainer}>
                  <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
                  <div className={styles.projectOverlay}>
                    <span className={styles.projectCategory}>{project.category}</span>
                  </div>
                </div>
              )}
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                {project.outcomes && project.outcomes.length > 0 && (
                  <div className={styles.projectHighlights}>
                    <h4 className={styles.highlightsTitle}>Key Outcomes:</h4>
                    <ul className={styles.highlightsList}>
                      {project.outcomes.slice(0, 2).map((outcome, index) => (
                        <li key={index} className={styles.highlightItem}>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className={styles.projectFooter}>
                  <div className={styles.projectTools}>
                    {project.tools?.slice(0, 3).map((tool, index) => (
                      <span key={index} className={styles.toolBadge}>
                        {tool}
                      </span>
                    ))}
                  </div>
                  <Link to={`/projects/${project.slug}`} className={styles.projectLink}>
                    Read Case Study
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.sectionFooter}>
          <Link to="/projects" className={styles.viewAllButton}>
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Certifications & Practical Experience</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        {/* Certifications */}
        <div className={styles.subsectionHeader}>
          <h3 className={styles.subsectionTitle}>Professional Certifications</h3>
        </div>
        <div className={styles.certificationsGrid}>
          {recentCertifications.map((cert) => (
            <div key={cert.id} className={styles.certCard}>
              <div className={styles.certIcon}>
                <Award size={32} />
              </div>
              <div className={styles.certContent}>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <div className={styles.certMeta}>
                  <span className={styles.certCategory}>{cert.category}</span>
                  <span className={styles.certDate}>
                    {new Date(cert.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conferences & Events */}
        <div className={styles.subsectionHeader}>
          <h3 className={styles.subsectionTitle}>Conferences & Events</h3>
        </div>
        <div className={styles.conferencesGrid}>
          {conferences.map((conf) => (
            <div key={conf.id} className={styles.conferenceCard}>
              <h4 className={styles.conferenceName}>{conf.name}</h4>
              <div className={styles.conferenceRole}>{conf.role}</div>
              <p className={styles.conferenceDescription}>{conf.description}</p>
              <span className={styles.conferenceDate}>
                {new Date(conf.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
              </span>
            </div>
          ))}
        </div>

        {/* Practical Experience */}
        <div className={styles.subsectionHeader}>
          <h3 className={styles.subsectionTitle}>Hands-On Labs & Community</h3>
        </div>
        <div className={styles.practicalGrid}>
          {practicalExperience.map((exp) => (
            <div key={exp.id} className={styles.practicalCard}>
              <div className={styles.practicalHeader}>
                <h4 className={styles.practicalPlatform}>{exp.platform}</h4>
                <span className={styles.practicalCategory}>{exp.category}</span>
              </div>
              <p className={styles.practicalDescription}>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Latest Research & Insights</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <p className={styles.sectionDescription}>
          Technical articles, research findings, and offensive security insights covering red teaming, cloud security,
          and advanced exploitation techniques.
        </p>
        <div className={styles.blogGrid}>
          {featuredBlogs.map((blog) => (
            <article key={blog.id} className={styles.blogCard}>
              {blog.imageUrl && (
                <div className={styles.blogImageContainer}>
                  <img src={blog.imageUrl} alt={blog.title} className={styles.blogImage} />
                  <div className={styles.blogBadge}>{blog.category}</div>
                </div>
              )}
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogDate}>
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className={styles.blogDivider}>•</span>
                  <span className={styles.blogReadTime}>{blog.readTime}</span>
                </div>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                <div className={styles.blogFooter}>
                  <div className={styles.blogTags}>
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className={styles.blogTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/blog/${blog.slug}`} className={styles.blogLink}>
                    Read More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.sectionFooter}>
          <Link to="/blog" className={styles.viewAllButton}>
            View All Articles
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Let's Connect</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactHeading}>Ready to collaborate?</h3>
            <p className={styles.contactText}>
              Whether you're looking for red team expertise, cloud security consultation, or technical collaboration,
              I'm always open to discussing challenging security projects and research opportunities.
            </p>
            <div className={styles.contactDetails}>
              <a href={`mailto:${portfolioData.email}`} className={styles.contactDetail}>
                <Mail className={styles.detailIcon} />
                <span>{portfolioData.email}</span>
              </a>
            </div>
          </div>
          <div className={styles.contactLinks}>
            {portfolioData.linkedin && (
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <Linkedin className={styles.contactIcon} />
                <div className={styles.contactLinkText}>
                  <span className={styles.contactLinkTitle}>LinkedIn</span>
                  <span className={styles.contactLinkDesc}>Professional network</span>
                </div>
              </a>
            )}
            {portfolioData.github && (
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <Github className={styles.contactIcon} />
                <div className={styles.contactLinkText}>
                  <span className={styles.contactLinkTitle}>GitHub</span>
                  <span className={styles.contactLinkDesc}>Open source projects</span>
                </div>
              </a>
            )}
            {portfolioData.medium && (
              <a href={portfolioData.medium} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <BookOpen className={styles.contactIcon} />
                <div className={styles.contactLinkText}>
                  <span className={styles.contactLinkTitle}>Medium</span>
                  <span className={styles.contactLinkDesc}>Technical articles</span>
                </div>
              </a>
            )}
            {portfolioData.youtube && (
              <a href={portfolioData.youtube} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <Youtube className={styles.contactIcon} />
                <div className={styles.contactLinkText}>
                  <span className={styles.contactLinkTitle}>YouTube</span>
                  <span className={styles.contactLinkDesc}>Video content</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <Shield className={styles.footerLogo} />
            <span className={styles.footerText}>My Portfolio</span>
          </div>
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
