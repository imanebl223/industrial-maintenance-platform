import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// GET /api/machines
export const getAllMachines = async (req, res) => {
  try {
    const machines = await prisma.machine.findMany({
      include: {
        maintenances: true,
        interventions: true,
      }
    });
    res.json(machines);
  } catch (error) {
    console.error("Erreur récupération machines:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// GET /api/machines/:id
export const getMachineById = async (req, res) => {
  const { id } = req.params;
  try {
    const machine = await prisma.machine.findUnique({
      where: { id: Number(id) },
      include: {
        maintenances: true,
        interventions: true,
      }
    });
    if (!machine) {
      return res.status(404).json({ error: "Machine introuvable" });
    }
    res.json(machine);
  } catch (error) {
    console.error("Erreur récupération machine par id:", error.message);
    res.status(500).json({ error: "Erreur lors de la récupération de la machine" });
  }
};

// POST /api/machines
export const createMachine = async (req, res) => {
  try {
    const { name, location, status } = req.body;
    const newMachine = await prisma.machine.create({
      data: { name, location, status },
    });
    res.status(201).json(newMachine);
  } catch (error) {
    console.error('Erreur lors de la création de la machine :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// PUT - update machine by id
export const updateMachine = async (req, res) => {
  const { id } = req.params;
  const { name, status, location } = req.body;

  try {
    const updatedMachine = await prisma.machine.update({
      where: { id: Number(id) },
      data: { name, status, location },
    });

    res.json(updatedMachine);
  } catch (error) {
    console.error("Erreur mise à jour machine:", error);
    res.status(500).json({ error: "Erreur lors de la mise à jour de la machine" });
  }
};

// DELETE - delete machine by id
export const deleteMachine = async (req, res) => {
  const { id } = req.params;

  try {
    // Delete related maintenances
    await prisma.maintenance.deleteMany({
      where: { machineId: Number(id) },
    });

    // Delete related interventions
    await prisma.intervention.deleteMany({
      where: { machineId: Number(id) },
    });

    // Delete the machine
    await prisma.machine.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Machine supprimée avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de la machine:", error);
    res.status(500).json({ error: "Erreur lors de la suppression de la machine" });
  }
};
