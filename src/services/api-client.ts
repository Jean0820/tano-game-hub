import axios from "axios";

export default axios.create({
  baseURL: "https://moviesverse1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "c5b355e2b3msh90d156782890c26p1995e0jsnbdd6911bc035",
    "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
  },
});
