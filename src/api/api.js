import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = (payload) => api.post("/auth/login", payload);
export const registerUser = (payload) => api.post("/auth/register", payload);
export const getNotes = () => api.get("/notes");
export const createNote = (payload) => api.post("/notes", payload);
export const deleteNote = (id) => api.delete(`/notes/${id}`);
export const getDashboardData = () => api.get("/dashboard");

export default api;
