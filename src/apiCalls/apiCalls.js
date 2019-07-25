import axios from "axios";

export const getAllAliments = () =>
  axios.get(process.env.REACT_APP_BACKEND_URL + "/api/aliments");

export const getAllMenu = () =>
  axios.get(process.env.REACT_APP_BACKEND_URL + "/api/menu");

export const getUser = () =>
  axios.get(process.env.REACT_APP_BACKEND_URL + "/api/user/id");
