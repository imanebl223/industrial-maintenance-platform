import express from "express";
import axios from "axios";

const router = express.Router();

// Endpoint pour prédire une panne
router.post("/predict", async (req, res) => {
  try {
    const { machineId, temperature, vibration, hoursUsed } = req.body;

    // Envoi vers API Python
    const response = await axios.post("http://localhost:8000/predict", {
      machineId,
      temperature,
      vibration,
      hoursUsed,
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur prédiction IA" });
  }
});

export default router;