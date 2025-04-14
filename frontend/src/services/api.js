import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const headers = {
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
};

export const fetchModels = () => axios.get(`${BASE_URL}/models`, headers);

export const fetchModelById = (id) =>
  axios.get(`${BASE_URL}/models/${id}`, headers);
