import { Link } from "react-router-dom";

function Sidebar({ role }) {
  return (
    <aside style={styles.sidebar}>
      <nav>
        <ul style={styles.ul}>
          {role === "admin" && (
            <>
              <li><Link to="/admin/dashboard">Dashboard</Link></li>
              <li><Link to="/admin/machines">Machines</Link></li>
              <li><Link to="/admin/maintenances">Maintenances</Link></li>
              <li><Link to="/admin/interventions">Interventions</Link></li>
              <li><Link to="/admin/prediction">Module IA</Link></li>
            </>
          )}

          {role === "technicien" && (
            <>
              <li><Link to="/technicien/dashboard">Mes Interventions</Link></li>
              <li><Link to="/technicien/password">Changer mot de passe</Link></li>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    background: "#f1f5f9",
    height: "100vh",
    padding: "20px",
    boxSizing: "border-box",
  },
  ul: {
    listStyle: "none",
    padding: 0,
  },
};

export default Sidebar;
