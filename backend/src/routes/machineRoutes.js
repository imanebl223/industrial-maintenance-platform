import express from 'express';
import {
  getAllMachines,
  getMachineById,
  createMachine,
  updateMachine,
  deleteMachine
} from '../controllers/machineController.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getAllMachines);
router.get('/:id', authMiddleware, getMachineById);
router.post('/', authMiddleware, createMachine);
router.put('/:id', authMiddleware, updateMachine);
router.delete('/:id', authMiddleware, deleteMachine);

export default router;
