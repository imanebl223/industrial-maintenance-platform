import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/Admin.css";

export default function TechnicienIntervention() {
  const [note, setNote] = useState("");

  const interventions = [
    { id: 1, machine: "Machine A", statut: "En attente" },
    { id: 2, machine: "Machine B", statut: "En cours" },
  ];

  return (
    <Layout role="technicien">
      <h2 className="page-title">🔧 Interventions - Technicien</h2>

      {/* Cartes résumé */}
      <div className="card-grid">
        <div className="card">📋 En attente: 5</div>
        <div className="card">⏳ En cours: 3</div>
        <div className="card">✅ Terminées: 7</div>
      </div>

      {/* Tableau des interventions */}
      <h3 className="section-title">📋 Mes Interventions</h3>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Machine</th>
            <th>Statut</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {interventions.map((int) => (
            <tr key={int.id}>
              <td>{int.machine}</td>
              <td>{int.statut}</td>
              <td>
                <input
                  type="text"
                  placeholder="Ajouter note..."
                  className="input-note"
                  onChange={(e) => setNote(e.target.value)}
                />
              </td>
              <td>
                <button className="btn-action">✔️ Mettre à jour</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
