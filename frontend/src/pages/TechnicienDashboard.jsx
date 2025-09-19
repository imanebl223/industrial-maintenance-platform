import Layout from "../components/Layout";
import "../styles/Admin.css";

export default function TechnicienDashboard() {
  return (
    <Layout role="technicien">
      <h2 className="page-title">🔧 Tableau de bord Technicien</h2>

      {/* Cartes résumé */}
      <div className="card-grid">
        <div className="card">📋 Interventions en attente: 5</div>
        <div className="card">⏳ En cours: 3</div>
        <div className="card">✅ Terminées: 7</div>
        <div className="card">🖥️ Machines attribuées: 4</div>
      </div>

      {/* Rapport rapide */}
      <h3 className="section-title">📝 Rapport rapide</h3>
      <form className="report-form">
        <input type="text" placeholder="Pièces remplacées" />
        <textarea placeholder="Observations..."></textarea>
        <button type="submit" className="btn-submit">
          ✅ Soumettre
        </button>
      </form>
    </Layout>
  );
}
