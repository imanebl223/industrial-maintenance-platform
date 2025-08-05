import express from 'express';
import {
  getAllInterventions,
  createIntervention,
  updateIntervention,
  deleteIntervention
} from '../controllers/interventionController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getAllInterventions);
router.post('/', authMiddleware, createIntervention);
router.put('/:id', authMiddleware, updateIntervention);
router.delete('/:id', authMiddleware, deleteIntervention);

export default router;
