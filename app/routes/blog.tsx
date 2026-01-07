import { Link } from "react-router";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import type { Route } from "./+types/blog";
import styles from "./blog.module.css";
import { blogPosts } from "~/data/blog";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog & Research - Elite Cybersecurity Insights" },
    {
      name: "description",
      content:
        "Technical articles, research findings, and offensive security insights covering red teaming, cloud security, and advanced exploitation techniques.",
    },
  ];
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Red Teaming", "Cloud Security", "Research", "Technology", "CTF Writeup"];

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Blog & Writing Hub</h1>
          <p className={styles.subtitle}>
            Technical deep-dives, security research, red team tactics, and insights from the frontlines of offensive
            security
          </p>
        </div>
      </header>

      <div className={styles.main}>
        <div className={styles.filters}>
          <h2 className={styles.filtersTitle}>Filter by Category</h2>
          <div className={styles.categoryButtons}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${styles.categoryButton} ${selectedCategory === category ? styles.categoryButtonActive : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.postsGrid}>
          {filteredPosts.map((post) => (
            <article key={post.id} className={styles.postCard}>
              {post.imageUrl && (
                <div className={styles.postImageContainer}>
                  <img src={post.imageUrl} alt={post.title} className={styles.postImage} />
                  <div className={styles.postBadge}>{post.category}</div>
                </div>
              )}
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <div className={styles.metaItem}>
                    <Calendar className={styles.metaIcon} size={14} />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className={styles.metaItem}>
                    <Clock className={styles.metaIcon} size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postFooter}>
                  <div className={styles.postTags}>
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={styles.postTag}>
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.slug}`} className={styles.postLink}>
                    Read Article
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>No articles found in this category.</p>
          </div>
        )}
      </div>

      <div className={styles.backLink}>
        <Link to="/" className={styles.backButton}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
