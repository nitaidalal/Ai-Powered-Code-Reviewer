import axios from 'axios'

const api = axios.create({
  baseURL: "https://codeshield-backend.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api
