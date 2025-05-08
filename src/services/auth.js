import axios from 'axios';

const API = process.env.NEXT_PUBLIC_API_URL;

export const register = (data) => axios.post("https://task-management-backend-q4u7.onrender.com/api/auth/register", data);
export const login = (data) => axios.post("https://task-management-backend-q4u7.onrender.com/api/auth/login", data);
