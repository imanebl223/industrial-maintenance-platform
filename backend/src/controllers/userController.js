// src/controllers/userController.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// GET /api/users (facultatif)
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, createdAt: true }
    });
    res.json(users);
  } catch (error) {
    console.error("Erreur utilisateurs:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// POST /api/auth/register
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ error: "Email déjà utilisé" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword }
    });

    res.status(201).json({
      message: "Utilisateur créé avec succès",
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error("Erreur inscription:", error);
    res.status(500).json({ error: "Erreur serveur lors de l'inscription" });
  }
};

// POST /api/auth/login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: "Utilisateur introuvable" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ error: "Mot de passe incorrect" });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({
      message: "Connexion réussie",
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error("Erreur connexion:", error);
    res.status(500).json({ error: "Erreur serveur lors de la connexion" });
  }
};
