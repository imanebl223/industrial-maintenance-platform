import http from "./http";

const getAll = async () => (await http.get("/users")).data;
const create = async (payload) => (await http.post("/auth/register", payload)).data; // création via /auth/register
const remove = async (id) => (await http.delete(`/users/${id}`)).data;
// (option) update si tu as une route PUT /users/:id dans ton backend
const update = async (id, payload) => (await http.put(`/users/${id}`, payload)).data;

export default { getAll, create, remove, update };
