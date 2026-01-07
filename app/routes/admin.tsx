import { useState } from "react";
import { useNavigate } from "react-router";
import { LogOut, FolderOpen, Award, User, Mail, Plus, Edit, Trash2 } from "lucide-react";
import type { Route } from "./+types/admin";
import styles from "./admin.module.css";
import { projects, skills, portfolioData } from "~/data/portfolio";
import { useToast } from "~/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog/dialog";
import { Button } from "~/components/ui/button/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin Dashboard - Breachfolio" },
    { name: "description", content: "Manage your portfolio content" },
  ];
}

export default function Admin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ type: string; id: string; name: string } | null>(null);

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/login");
  };

  const handleDelete = (type: string, id: string, name: string) => {
    setItemToDelete({ type, id, name });
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      toast({
        title: "Item Deleted",
        description: `${itemToDelete.name} has been removed.`,
      });
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    }
  };

  const handleEdit = (type: string, id: string) => {
    toast({
      title: "Edit Feature",
      description: `Opening editor for ${type}...`,
    });
  };

  const handleAdd = (type: string) => {
    toast({
      title: "Add Feature",
      description: `Opening form to add new ${type}...`,
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Content Management Dashboard</h1>
          <button onClick={handleLogout} className={styles.logoutButton}>
            <LogOut className={styles.logoutIcon} />
            Logout
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.welcome}>
          <h2 className={styles.welcomeTitle}>Welcome back, {portfolioData.name}</h2>
          <p className={styles.welcomeText}>Manage your portfolio content, projects, and skills from this dashboard.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <FolderOpen className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Projects</h3>
            </div>
            <p className={styles.cardDescription}>
              Manage your project portfolio. Add new projects, edit existing ones, or remove outdated work.
            </p>
            <button className={styles.cardButton} onClick={() => handleAdd("project")}>
              Manage Projects
            </button>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Award className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Skills</h3>
            </div>
            <p className={styles.cardDescription}>
              Update your skills and expertise. Organize them by category and keep your capabilities current.
            </p>
            <button className={styles.cardButton} onClick={() => handleAdd("skill")}>
              Manage Skills
            </button>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <User className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>About & Profile</h3>
            </div>
            <p className={styles.cardDescription}>
              Edit your professional summary, title, and welcome message to reflect your current expertise.
            </p>
            <button className={styles.cardButton} onClick={() => handleEdit("profile", "1")}>
              Edit Profile
            </button>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Mail className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Contact Info</h3>
            </div>
            <p className={styles.cardDescription}>
              Update your contact information and social media links for visitors to reach you.
            </p>
            <button className={styles.cardButton} onClick={() => handleEdit("contact", "1")}>
              Edit Contact
            </button>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recent Projects</h2>
            <button className={styles.addButton} onClick={() => handleAdd("project")}>
              <Plus className={styles.addIcon} />
              Add Project
            </button>
          </div>
          <div className={styles.list}>
            {projects.slice(0, 5).map((project) => (
              <div key={project.id} className={styles.listItem}>
                <div className={styles.itemContent}>
                  <h3 className={styles.itemTitle}>{project.title}</h3>
                  <p className={styles.itemMeta}>
                    {project.category} • {new Date(project.date).toLocaleDateString()}
                  </p>
                </div>
                <div className={styles.itemActions}>
                  <button className={styles.iconButton} onClick={() => handleEdit("project", project.id)}>
                    <Edit className={styles.editIcon} />
                  </button>
                  <button
                    className={styles.iconButton}
                    onClick={() => handleDelete("project", project.id, project.title)}
                  >
                    <Trash2 className={styles.deleteIcon} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Skills Overview</h2>
            <button className={styles.addButton} onClick={() => handleAdd("skill")}>
              <Plus className={styles.addIcon} />
              Add Skill
            </button>
          </div>
          <div className={styles.list}>
            {skills.slice(0, 8).map((skill) => (
              <div key={skill.id} className={styles.listItem}>
                <div className={styles.itemContent}>
                  <h3 className={styles.itemTitle}>{skill.name}</h3>
                  <p className={styles.itemMeta}>{skill.category}</p>
                </div>
                <div className={styles.itemActions}>
                  <button className={styles.iconButton} onClick={() => handleEdit("skill", skill.id)}>
                    <Edit className={styles.editIcon} />
                  </button>
                  <button className={styles.iconButton} onClick={() => handleDelete("skill", skill.id, skill.name)}>
                    <Trash2 className={styles.deleteIcon} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{itemToDelete?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
