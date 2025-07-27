require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 👉 Route de test
app.get('/', (req, res) => {
  res.send('API up and running!');
});

// 👉 Exemple de route GET /machines
app.get('/machines', async (req, res) => {
  try {
    const machines = [
      { id: 1, name: 'Pompe A', status: 'En marche' },
      { id: 2, name: 'Compresseur B', status: 'En panne' },
    ];
    res.json(machines);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors du chargement des machines' });
  }
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend API running on port ${PORT}`);
});
