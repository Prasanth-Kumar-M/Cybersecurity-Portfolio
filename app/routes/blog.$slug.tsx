import { Link, useParams } from "react-router";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import type { Route } from "./+types/blog.$slug";
import styles from "./blog.$slug.module.css";
import { blogPosts } from "~/data/blog";

export function meta({ params }: Route.MetaArgs) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return [{ title: "Blog Post Not Found" }];
  }
  return [{ title: `${post.title} - Blog` }, { name: "description", content: post.excerpt }];
}

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1 className={styles.notFoundTitle}>Blog Post Not Found</h1>
          <p className={styles.notFoundText}>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className={styles.backButton}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.backNav}>
        <Link to="/blog" className={styles.backLink}>
          <ArrowLeft size={18} />
          Back to Blog
        </Link>
      </div>

      <article className={styles.article}>
        {post.imageUrl && (
          <div className={styles.heroImage}>
            <img src={post.imageUrl} alt={post.title} className={styles.image} />
            <div className={styles.imageBadge}>{post.category}</div>
          </div>
        )}

        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <Calendar className={styles.metaIcon} size={16} />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className={styles.metaItem}>
              <Clock className={styles.metaIcon} size={16} />
              <span>{post.readTime}</span>
            </div>
            <button className={styles.shareButton}>
              <Share2 size={16} />
              Share
            </button>
          </div>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className={styles.excerpt}>
          <p>{post.excerpt}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.contentSection}>
            <h2>Introduction</h2>
            <p>
              This is a placeholder for the full blog post content. In a production environment, this would contain the
              complete technical writeup, research findings, or security insights based on the post category and topic.
            </p>
            <p>
              The content would be rich with technical details, code examples, methodology explanations, and practical
              insights from real-world offensive security engagements.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2>Technical Deep Dive</h2>
            <p>
              This section would contain detailed technical analysis, including attack vectors, exploitation techniques,
              tooling demonstrations, and step-by-step walkthroughs of security assessments or red team operations.
            </p>
            <div className={styles.codeBlock}>
              <code>
                # Example command or code snippet
                <br />
                $ tool-name --option target-system
                <br />
                [+] Successfully exploited vulnerability
              </code>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2>Key Takeaways</h2>
            <ul className={styles.takeawaysList}>
              <li>Critical security insight based on the engagement or research</li>
              <li>Technical lessons learned from the operation</li>
              <li>Defensive recommendations for organizations</li>
              <li>Future research directions and areas of interest</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2>Conclusion</h2>
            <p>
              Summary of findings, impact assessment, and closing thoughts on the security implications of the research
              or engagement. Discussion of how these insights contribute to improving organizational security posture
              and advancing the field of offensive security.
            </p>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.authorNote}>
            <p>
              <strong>Note:</strong> This is a portfolio demonstration. The techniques and findings discussed should
              only be used in authorized security assessments with proper permissions and legal authorization.
            </p>
          </div>
        </footer>
      </article>

      <div className={styles.relatedPosts}>
        <h2 className={styles.relatedTitle}>Related Articles</h2>
        <div className={styles.relatedGrid}>
          {blogPosts
            .filter((p) => p.id !== post.id && p.category === post.category)
            .slice(0, 3)
            .map((relatedPost) => (
              <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className={styles.relatedCard}>
                <h3 className={styles.relatedCardTitle}>{relatedPost.title}</h3>
                <p className={styles.relatedCardExcerpt}>{relatedPost.excerpt.slice(0, 120)}...</p>
                <span className={styles.relatedCardLink}>Read More →</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
