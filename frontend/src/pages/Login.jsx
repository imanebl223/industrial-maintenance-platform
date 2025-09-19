// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import authService from "../services/authService";
import "../styles/Login.css"; // <-- On importe notre CSS

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.login(email, password);
      const token = res.token || res; // backend renvoie { token } ou juste token
      localStorage.setItem("token", token);

      const decoded = jwtDecode(token);
      if (decoded.role === "admin") {
        navigate("/admin/dashboard");
      } else if (decoded.role === "technicien") {
        navigate("/technicien/dashboard");
      }
    } catch (err) {
      alert("❌ Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">🔧 Plateforme Maintenance</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="ex: imaneadmin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login">
            🚀 Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
