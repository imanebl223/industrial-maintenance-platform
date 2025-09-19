// src/utils/authHelper.js

export const getToken = () => localStorage.getItem("token");

export const getUserRole = () => {
  try {
    const token = getToken();
    if (!token) return null;

    const payload = JSON.parse(atob(token.split(".")[1])); // décode le JWT
    return payload.role || null;
  } catch {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
