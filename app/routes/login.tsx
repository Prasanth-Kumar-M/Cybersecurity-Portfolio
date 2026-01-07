import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import type { Route } from "./+types/login";
import styles from "./login.module.css";
import { useToast } from "~/hooks/use-toast";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login - Breachfolio" }, { name: "description", content: "Login to manage your portfolio" }];
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple mock authentication
    if (email && password) {
      toast({
        title: "Login Successful",
        description: "Redirecting to admin dashboard...",
      });

      // Simulate authentication delay
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Portfolio Login</h1>
          <p className={styles.subtitle}>Access your content management dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Sign In
          </button>
        </form>

        <Link to="/" className={styles.backLink}>
          <ArrowLeft className={styles.backIcon} />
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
