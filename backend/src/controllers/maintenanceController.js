import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllMaintenances = async (req, res) => {
  try {
    const maintenances = await prisma.maintenance.findMany({
      include: { machine: true }
    });
    res.json(maintenances);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const createMaintenance = async (req, res) => {
  const { date, type, machineId } = req.body;
  try {
    const maintenance = await prisma.maintenance.create({
      data: {
        date: new Date(date),
        type,
        machineId: Number(machineId),
      }
    });
    res.status(201).json(maintenance);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const updateMaintenance = async (req, res) => {
  const { id } = req.params;
  const { date, type, machineId } = req.body;
  try {
    const updatedMaintenance = await prisma.maintenance.update({
      where: { id: Number(id) },
      data: {
        date: new Date(date),
        type,
        machineId: Number(machineId),
      }
    });
    res.json(updatedMaintenance);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const deleteMaintenance = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.maintenance.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Maintenance supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression de la maintenance" });
  }
};
