import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/api";

const headers = {
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
};

export const fetchModels = () => axios.get(`${BASE_URL}/models`, headers);

export const fetchModelById = (id) =>
  axios.get(`${BASE_URL}/models/${id}`, headers);
