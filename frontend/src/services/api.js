import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/api";

export const fetchModels = () => axios.get(`${BASE_URL}/models`);
export const fetchModelById = (id) => axios.get(`${BASE_URL}/models/${id}`);
