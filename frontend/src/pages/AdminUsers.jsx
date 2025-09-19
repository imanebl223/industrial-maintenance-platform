import Layout from "../components/Layout";
import "../styles/Admin.css";

export default function AdminUsers() {
  return (
    <Layout>
      <h2 className="page-title">👤 Gestion des utilisateurs</h2>
      <button className="btn-add">+ Ajouter un utilisateur</button>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>admin@gmail.com</td>
            <td>Admin</td>
            <td>
              <button className="btn-edit">Modifier</button>
              <button className="btn-delete">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}
