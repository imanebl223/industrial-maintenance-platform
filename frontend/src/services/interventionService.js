import http from "./http";

const getAll = async () => (await http.get("/interventions")).data;
const create = async (payload) => (await http.post("/interventions", payload)).data;
const update = async (id, payload) => (await http.put(`/interventions/${id}`, payload)).data;
const remove = async (id) => (await http.delete(`/interventions/${id}`)).data;

// côté technicien: filtrage local par userId stocké
const getMine = async () => {
  const userId = Number(localStorage.getItem("userId"));
  const data = await getAll();
  return data.filter((i) => i.userId === userId);
};

export default { getAll, create, update, remove, getMine };
