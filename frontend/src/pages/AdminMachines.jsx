import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import userService from "../services/userService";
import "../styles/Admin.css";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({ nom: "", email: "", role: "technicien" });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await userService.getAllUsers();
    setUsers(data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    await userService.addUser(newUser);
    setNewUser({ nom: "", email: "", role: "technicien" });
    setShowForm(false);
    loadUsers();
  };

  const handleDelete = async (id) => {
    await userService.deleteUser(id);
    loadUsers();
  };

  return (
    <Layout role="admin">
      <h2 className="page-title">👤 Gestion des utilisateurs</h2>

      <button className="btn-add" onClick={() => setShowForm(true)}>+ Ajouter un utilisateur</button>

      {showForm && (
        <form className="form-card" onSubmit={handleAdd}>
          <h3>Nouvel utilisateur</h3>

          <label>Nom</label>
          <input
            type="text"
            value={newUser.nom}
            onChange={(e) => setNewUser({ ...newUser, nom: e.target.value })}
            required
          />

          <label>Email</label>
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
          />

          <label>Rôle</label>
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option value="admin">Admin</option>
            <option value="technicien">Technicien</option>
          </select>

          <div className="form-actions">
            <button type="submit" className="btn-save">Enregistrer</button>
            <button type="button" className="btn-cancel" onClick={() => setShowForm(false)}>Annuler</button>
          </div>
        </form>
      )}

      <table className="styled-table">
        <thead>
          <tr><th>Nom</th><th>Email</th><th>Rôle</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.nom}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button className="btn-delete" onClick={() => handleDelete(u.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
