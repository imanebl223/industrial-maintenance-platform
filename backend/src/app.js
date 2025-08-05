import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Imports des routes
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import machineRoutes from './routes/machineRoutes.js';
import maintenanceRoutes from './routes/maintenanceRoutes.js';
import interventionRoutes from './routes/interventionRoutes.js'; // ✅ Ajouté

// Middleware d'authentification
import authMiddleware from './middleware/authMiddleware.js';

const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());

// Routes publiques (authentification)
app.use('/api/auth', authRoutes);

// Routes protégées par authMiddleware
app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/machines', authMiddleware, machineRoutes);
app.use('/api/maintenances', authMiddleware, maintenanceRoutes);
app.use('/api/interventions', authMiddleware, interventionRoutes); // ✅ Ajouté ici

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
