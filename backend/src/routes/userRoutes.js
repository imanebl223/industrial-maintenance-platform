import express from 'express';
import { getAllUsers } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getAllUsers);

// **Ne pas mettre d'auth sur la création d'utilisateur ici,
// car elle est gérée via /api/auth/register**

export default router;
