import axios from "axios";

const API = "http://localhost:5546"

export const getTasksAPI = () => {

 const token = localStorage.getItem("token");

 return axios.get(`${API}/tasks/getTasks`,
    {
  headers:{ Authorization: token }
 });

};

export const addTaskAPI = (task) => {

 const token = localStorage.getItem("token");

 return axios.post(`${API}/tasks/addTask`,task,
    {
  headers:{ Authorization: token }
 });

};

export const updateTaskAPI = (id) => {

 const token = localStorage.getItem("token");

 return axios.patch(`${API}/tasks/updateTask/${id}`,{},
    {
  headers:{ Authorization: token }
 });

};

export const deleteTaskAPI = (id) => {

 const token = localStorage.getItem("token");

 return axios.delete(`${API}/tasks/deleteTask/${id}`,
    {
       headers:{ Authorization: token }
    });

};

export const signupAPI = (data) =>
 axios.post(`${API}/auth/signup`,data);

export const loginAPI = (data) =>
 axios.post(`${API}/auth/login`,data);