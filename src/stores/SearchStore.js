import { defineStore } from "pinia";
import axios from "axios";
const url =
  "http://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
const api_key = "36bb301d-fadf-4371-b97e-ede492f71f8d";
export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    loader: false,
    movies: [],
  }),
  actions: {
    async getMovies(search) {
      this.loader = true;
      const res = await axios.get(`${url}${search}`, {
        headers: {
          "X-API-KEY": api_key,
        },
      });
      const data = await res.data;
      this.movies = data.films.map((film) => {
        return {
          ...film,
          isWatched: false,
        };
      });
      console.log(this.movies);
      this.loader = false;
    },
  },
});
