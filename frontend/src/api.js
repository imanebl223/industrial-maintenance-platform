// src/api.js
import axios from 'axios';

// Backend Node.js (Express)
export const api = axios.create({
  baseURL: 'http://localhost:5000', // port du backend
});

// API IA Flask
export const aiApi = axios.create({
  baseURL: 'http://localhost:5001', // port de l’API IA
});
