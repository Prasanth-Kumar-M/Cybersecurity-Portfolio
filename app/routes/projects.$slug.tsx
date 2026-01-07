import { Link, useParams } from "react-router";
import { ArrowLeft, Calendar, Target, Wrench, TrendingUp, Lightbulb, CheckCircle } from "lucide-react";
import type { Route } from "./+types/projects.$slug";
import styles from "./projects.$slug.module.css";
import { projects } from "~/data/portfolio";

export function meta({ params }: Route.MetaArgs) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return [{ title: "Project Not Found" }];
  }

  return [{ title: `${project.title} - Case Study` }, { name: "description", content: project.description }];
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1 className={styles.notFoundTitle}>Project Not Found</h1>
          <p className={styles.notFoundText}>The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className={styles.backLink}>
            <ArrowLeft className={styles.backIcon} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className={styles.container}>
      <div className={styles.backNav}>
        <Link to="/projects" className={styles.backLink}>
          <ArrowLeft size={18} />
          Back to Projects
        </Link>
      </div>

      <article className={styles.article}>
        {project.imageUrl && (
          <div className={styles.heroImage}>
            <img src={project.imageUrl} alt={project.title} className={styles.image} />
            <div className={styles.imageBadge}>{project.category}</div>
          </div>
        )}

        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <Calendar className={styles.metaIcon} size={16} />
              <span>{formattedDate}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.categoryBadge}>{project.category}</span>
            </div>
          </div>
        </header>

        <div className={styles.overview}>
          <p className={styles.description}>{project.fullDescription}</p>
        </div>

        <div className={styles.content}>
          {project.objective && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <Target className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>Objective</h2>
              </div>
              <p className={styles.sectionContent}>{project.objective}</p>
            </section>
          )}

          {project.tools && project.tools.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <Wrench className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>Tools & Technologies</h2>
              </div>
              <div className={styles.toolsGrid}>
                {project.tools.map((tool, index) => (
                  <div key={index} className={styles.toolItem}>
                    {tool}
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.methodology && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <CheckCircle className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>Methodology</h2>
              </div>
              <div className={styles.methodology}>
                {project.methodology.split(" \u2192 ").map((step, index) => (
                  <div key={index} className={styles.methodologyStep}>
                    <div className={styles.stepNumber}>{index + 1}</div>
                    <div className={styles.stepContent}>{step}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.outcomes && project.outcomes.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <TrendingUp className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>Key Outcomes & Impact</h2>
              </div>
              <ul className={styles.outcomesList}>
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className={styles.outcomeItem}>
                    {outcome}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.lessonsLearned && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <Lightbulb className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>Lessons Learned</h2>
              </div>
              <div className={styles.lessonsBox}>
                <p className={styles.sectionContent}>{project.lessonsLearned}</p>
              </div>
            </section>
          )}

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Skills Demonstrated</h2>
            </div>
            <div className={styles.skillsGrid}>
              {project.skills.map((skill) => (
                <div key={skill} className={styles.skillTag}>
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <div className={styles.disclaimer}>
            <p>
              <strong>Disclaimer:</strong> This case study represents authorized security testing conducted with proper
              permissions and legal authorization. All findings were responsibly disclosed and remediated.
            </p>
          </div>
        </footer>
      </article>

      <div className={styles.relatedProjects}>
        <h2 className={styles.relatedTitle}>Related Projects</h2>
        <div className={styles.relatedGrid}>
          {projects
            .filter((p) => p.id !== project.id && p.category === project.category)
            .slice(0, 3)
            .map((relatedProject) => (
              <Link key={relatedProject.id} to={`/projects/${relatedProject.slug}`} className={styles.relatedCard}>
                <h3 className={styles.relatedCardTitle}>{relatedProject.title}</h3>
                <p className={styles.relatedCardDesc}>{relatedProject.description.slice(0, 120)}...</p>
                <span className={styles.relatedCardLink}>View Case Study →</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
