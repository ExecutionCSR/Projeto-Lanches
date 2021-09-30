import axios from "axios";

const api = axios.create({
  baseURL:'http://192.168.3.103:4444',
});

export default api;