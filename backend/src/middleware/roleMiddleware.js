export const roleMiddleware = (allowedRoles) => (req, res, next) => {
  const userRole = req.user.role; // req.user est injecté par authMiddleware après décodage JWT

  if (!allowedRoles.includes(userRole)) {
    return res.status(403).json({ error: "Accès refusé : rôle non autorisé" });
  }

  next();
};
