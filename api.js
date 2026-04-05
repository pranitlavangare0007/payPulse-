import axios from "axios";

const api = axios.create({
  baseURL: "https://paypulse-9rse.onrender.com",
  headers: { "Content-Type": "application/json" }
});

api.interceptors.request.use(config => {
  const url = config.url || "";

  const isPublic = ["/login", "/register"]
    .some(p => url.startsWith(p));

  if (!isPublic) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

api.interceptors.response.use(
  res => res,
  err => {
    const msg = err?.response?.data?.message;

    if(msg){
      alert(msg);
    }else{
      alert("Server not reachable");
    }

    return Promise.reject(err);
  }
);

export default api;
