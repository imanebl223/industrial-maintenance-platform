import http from "./http";

const getAll = async () => (await http.get("/maintenances")).data;
const create = async (payload) => (await http.post("/maintenances", payload)).data;
const update = async (id, payload) => (await http.put(`/maintenances/${id}`, payload)).data;
const remove = async (id) => (await http.delete(`/maintenances/${id}`)).data;

export default { getAll, create, update, remove };
