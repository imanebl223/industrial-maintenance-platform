import express from 'express';
import {
  getAllMaintenances,
  createMaintenance,
  updateMaintenance,
  deleteMaintenance
} from '../controllers/maintenanceController.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getAllMaintenances);
router.post('/', authMiddleware, createMaintenance);
router.put('/:id', authMiddleware, updateMaintenance);
router.delete('/:id', authMiddleware, deleteMaintenance);

export default router;
