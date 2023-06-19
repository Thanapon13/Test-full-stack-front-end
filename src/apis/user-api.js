import axios from "../config/axios";

export const getUser = () => axios.get("/user/");
export const createUser = fromUser => axios.post("/user/", fromUser);

export const editUser = (userId, formData) =>
  axios.put(`/user/${userId}`, formData);

export const deleteUser = userId => axios.delete(`/user/${userId}`);
