import { Link } from "react-router";
import { ArrowRight, Calendar, Folder } from "lucide-react";
import type { Route } from "./+types/projects";
import styles from "./projects.module.css";
import { projects } from "~/data/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "All Projects - Elite Security Engagements" },
    {
      name: "description",
      content: "Comprehensive portfolio of red team operations, cloud security assessments, and offensive security research.",
    },
  ];
}

export default function Projects() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Security Engagements Portfolio</h1>
          <p className={styles.subtitle}>
            Real-world offensive security operations, red team engagements, cloud penetration testing, and security
            research initiatives
          </p>
        </div>
      </header>

      <div className={styles.main}>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              {project.imageUrl && (
                <div className={styles.projectImageContainer}>
                  <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
                  <div className={styles.projectOverlay}>
                    <span className={styles.projectCategory}>
                      <Folder size={14} />
                      {project.category}
                    </span>
                  </div>
                </div>
              )}
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <div className={styles.projectDate}>
                    <Calendar size={14} />
                    <span>{new Date(project.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}</span>
                  </div>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                {project.outcomes && project.outcomes.length > 0 && (
                  <div className={styles.projectHighlights}>
                    <h4 className={styles.highlightsTitle}>Key Achievements:</h4>
                    <ul className={styles.highlightsList}>
                      {project.outcomes.slice(0, 3).map((outcome, index) => (
                        <li key={index} className={styles.highlightItem}>
                          {outcome}
                        </li>
                      ))}\n                    </ul>
                  </div>
                )}
                <div className={styles.projectFooter}>
                  {project.tools && project.tools.length > 0 && (
                    <div className={styles.projectTools}>
                      {project.tools.slice(0, 4).map((tool, index) => (
                        <span key={index} className={styles.toolBadge}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link to={`/projects/${project.slug}`} className={styles.projectLink}>
                    View Full Case Study
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.backLink}>
        <Link to="/" className={styles.backButton}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
