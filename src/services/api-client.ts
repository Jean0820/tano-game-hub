import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "c4f89341e0msh087f8e574ff66a1p1631cejsnc21af1484f43",
  },
});

class ApiClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data);
  };
}

export default ApiClient;
