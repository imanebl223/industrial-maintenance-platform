import http from "./http";

const getAll = async () => (await http.get("/machines")).data;
const create = async (payload) => (await http.post("/machines", payload)).data;
const update = async (id, payload) => (await http.put(`/machines/${id}`, payload)).data;
const remove = async (id) => (await http.delete(`/machines/${id}`)).data;

export default { getAll, create, update, remove };
