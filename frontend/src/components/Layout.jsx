import { Link } from "react-router-dom";
import "../styles/Admin.css";

export default function Layout({ children, role = "admin" }) {
  // Liens par rôle
  const links = {
    admin: [
      { path: "/admin/dashboard", label: "📊 Dashboard" },
      { path: "/admin/users", label: "👤 Utilisateurs" },
      { path: "/admin/machines", label: "🖥️ Machines" },
      { path: "/admin/interventions", label: "📋 Interventions" },
    ],
    technicien: [
      { path: "/technicien/interventions", label: "📋 Interventions" },
      { path: "/technicien/prediction", label: "🤖 Prédiction IA" },
    ],
  };

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">
          {role === "admin" ? "⚙️ Admin Panel" : "🛠️ Technicien"}
        </h2>
        <nav>
          {links[role].map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header className="header">
          <h1>🔧 Plateforme de Maintenance Industrielle</h1>
        </header>
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
