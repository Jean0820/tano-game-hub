import axios from "axios";

export default axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "c5b355e2b3msh90d156782890c26p1995e0jsnbdd6911bc035",
  },
});
