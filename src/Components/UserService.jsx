import axios from "axios";
const base_url = "http://localhost:9934";

export const createUser = (data) => {
  return axios.post(`${base_url}/user/create`, data).then((response) => {
    return response.data;
  });
};

export const loginUser = (data) => {
  return axios.post(`${base_url}/auth/login`, data).then((response) => {
    return response.data;
  });
};
