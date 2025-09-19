import React, { useState } from "react";
import axios from "axios";

export default function Predict() {
  const [inputs, setInputs] = useState({
    temperature: "",
    vibration: "",
    pressure: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Gérer les inputs du formulaire
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // Envoyer la requête POST à /predict
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post("http://localhost:5001/predict", {
        temperature: Number(inputs.temperature),
        vibration: Number(inputs.vibration),
        pressure: Number(inputs.pressure),
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setResult(response.data);
    } catch (err) {
      setError("Erreur lors de la prédiction.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Prédiction de risque machine</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Température :</label><br />
          <input
            type="number"
            name="temperature"
            value={inputs.temperature}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Vibration :</label><br />
          <input
            type="number"
            step="0.01"
            name="vibration"
            value={inputs.vibration}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Pression :</label><br />
          <input
            type="number"
            name="pressure"
            value={inputs.pressure}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Analyse en cours..." : "Prédire"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Résultat :</h3>
          <p>Risque : <b>{result.risk}</b></p>
          <p>Probabilité : <b>{(result.probability * 100).toFixed(1)}%</b></p>
        </div>
      )}
    </div>
  );
}
