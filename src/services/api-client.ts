import axios from "axios";

export default axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "c4f89341e0msh087f8e574ff66a1p1631cejsnc21af1484f43",
  },
});
