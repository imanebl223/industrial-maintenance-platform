import Layout from "../components/Layout";
import "../styles/Admin.css";

export default function AdminDashboard() {
  return (
    <Layout>
      <h2 className="page-title">📊 Tableau de bord</h2>

      <div className="card-grid">
        <div className="stat-card">
          <span>12</span>
          Utilisateurs
        </div>
        <div className="stat-card">
          <span>8</span>
          Machines
        </div>
        <div className="stat-card">
          <span>20</span>
          Interventions
        </div>
      </div>

      <div className="card">
        <h3>🤖 Prédictions IA</h3>
        <p className="ok">✅ Aucune panne détectée pour aujourd’hui</p>
      </div>
    </Layout>
  );
}

