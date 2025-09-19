import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/Admin.css"; // ton CSS modernisé

const TechnicienPrediction = () => {
  const [machine, setMachine] = useState("");
  const [temperature, setTemperature] = useState("");
  const [vibration, setVibration] = useState("");
  const [risk, setRisk] = useState(null);
  const navigate = useNavigate();

  const machines = ["Machine A", "Machine B", "Machine C", "Machine D"];

  const handleAnalyze = (e) => {
    e.preventDefault();
    let riskLevel = "";
    let color = "";

    if (temperature > 80 || vibration > 5) {
      riskLevel = "Élevé";
      color = "red";
    } else if (
      (temperature >= 61 && temperature <= 80) ||
      (vibration >= 3 && vibration <= 5)
    ) {
      riskLevel = "Modéré";
      color = "orange";
    } else {
      riskLevel = "Faible";
      color = "green";
    }

    setRisk({ level: riskLevel, color });
  };

  const handleLogout = () => {
    // Nettoyer le token ou session
    localStorage.removeItem("token");
    navigate("/login"); // redirection
  };

  return (
    <Layout>
      <div className="technicien-content">
        <div className="header-actions">
          <h2 className="page-title">🔧 Prédiction de Risque Machine</h2>
          <button className="btn-logout" onClick={handleLogout}>
            ⏻ Déconnexion
          </button>
        </div>

        <form onSubmit={handleAnalyze} className="form-card">
          <h3>Analyser une machine</h3>

          <div className="form-group">
            <label>Machine :</label>
            <select
              className="select-machine"
              value={machine}
              onChange={(e) => setMachine(e.target.value)}
              required
            >
              <option value="">-- Choisir une machine --</option>
              {machines.map((m, idx) => (
                <option key={idx} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Température (°C) :</label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              required
              min="0"
            />
          </div>

          <div className="form-group">
            <label>Vibration (mm/s) :</label>
            <input
              type="number"
              value={vibration}
              onChange={(e) => setVibration(e.target.value)}
              required
              min="0"
            />
          </div>

          <button type="submit" className="btn-analyse">
            🚀 Analyser IA
          </button>
        </form>

        {risk && (
          <div
            className="result-card"
            style={{ borderColor: risk.color, marginTop: "1.5rem" }}
          >
            <h3>📊 Résultat :</h3>
            <p>Machine : {machine}</p>
            <p style={{ color: risk.color, fontWeight: "bold" }}>
              Risque : {risk.level}
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TechnicienPrediction;
