import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllInterventions = async (req, res) => {
  try {
    const interventions = await prisma.intervention.findMany({
      include: { user: true, machine: true }
    });
    res.json(interventions);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const createIntervention = async (req, res) => {
  try {
    const { date, notes, userId, machineId } = req.body;
    const intervention = await prisma.intervention.create({
      data: {
        date: new Date(date),
        notes,
        userId,
        machineId
      }
    });
    res.status(201).json(intervention);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const updateIntervention = async (req, res) => {
  const { id } = req.params;
  const { date, notes, userId, machineId } = req.body;

  try {
    const updated = await prisma.intervention.update({
      where: { id: Number(id) },
      data: {
        date: new Date(date),
        notes,
        userId,
        machineId
      }
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour" });
  }
};

export const deleteIntervention = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.intervention.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Intervention supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression" });
  }
};
