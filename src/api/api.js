import axios from "axios";

const instanceAxios = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "58d6597b-adbe-4193-a107-258376451e34" },
});

export const getUsers = (pageNumber = 1, pageSize = 10) => {
  return instanceAxios
    .get(`users?page=${pageNumber}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};

export const followApi = (userId) => {
  return instanceAxios.post(`/follow/${userId}`);
};

export const unfollowApi = (userId) => {
  return instanceAxios.delete(`follow/${userId}`);
};
