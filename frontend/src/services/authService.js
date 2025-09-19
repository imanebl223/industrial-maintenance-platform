// src/services/authService.js
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:5000/api/auth";

const login = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    const { token } = res.data;

    if (!token) throw new Error("Pas de token reçu");

    // Sauvegarde du token
    localStorage.setItem("token", token);

    // Décoder le token
    const decoded = jwtDecode(token);
    localStorage.setItem("role", decoded.role);
    localStorage.setItem("userId", decoded.id);

    return { token, role: decoded.role, userId: decoded.id };
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error.response?.data || { error: "Erreur de connexion" };
  }
};

const logout = () => {
  localStorage.clear();
  window.location.href = "/login";
};

export default { login, logout };
