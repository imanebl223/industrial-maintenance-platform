import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import interventionsService from "../services/interventionService";
import "../styles/Admin.css";

export default function AdminInterventions() {
  const [interventions, setInterventions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newIntervention, setNewIntervention] = useState({ titre: "", description: "", statut: "En cours" });

  useEffect(() => {
    loadInterventions();
  }, []);

  const loadInterventions = async () => {
    const data = await interventionsService.getAll();
    setInterventions(data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    await interventionsService.create(newIntervention);
    setNewIntervention({ titre: "", description: "", statut: "En cours" });
    setShowForm(false);
    loadInterventions();
  };

  const handleDelete = async (id) => {
    await interventionsService.remove(id);
    loadInterventions();
  };

  return (
    <Layout role="admin">
      <h2 className="page-title">📋 Gestion des interventions</h2>

      <button className="btn-add" onClick={() => setShowForm(true)}>+ Ajouter une intervention</button>

      {showForm && (
        <form className="form-card" onSubmit={handleAdd}>
          <h3>Nouvelle intervention</h3>

          <label>Titre</label>
          <input
            type="text"
            value={newIntervention.titre}
            onChange={(e) => setNewIntervention({ ...newIntervention, titre: e.target.value })}
            required
          />

          <label>Description</label>
          <textarea
            value={newIntervention.description}
            onChange={(e) => setNewIntervention({ ...newIntervention, description: e.target.value })}
          />

          <label>Statut</label>
          <select
            value={newIntervention.statut}
            onChange={(e) => setNewIntervention({ ...newIntervention, statut: e.target.value })}
          >
            <option value="En cours">En cours</option>
            <option value="Terminée">Terminée</option>
            <option value="Annulée">Annulée</option>
          </select>

          <div className="form-actions">
            <button type="submit" className="btn-save">Enregistrer</button>
            <button type="button" className="btn-cancel" onClick={() => setShowForm(false)}>Annuler</button>
          </div>
        </form>
      )}

      <table className="styled-table">
        <thead>
          <tr><th>Titre</th><th>Description</th><th>Statut</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {interventions.map((i) => (
            <tr key={i.id}>
              <td>{i.titre}</td>
              <td>{i.description}</td>
              <td>{i.statut}</td>
              <td>
                <button className="btn-delete" onClick={() => handleDelete(i.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
