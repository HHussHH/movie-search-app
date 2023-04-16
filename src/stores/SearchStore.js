import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";
import { ref } from "vue";
import axios from "axios";
const url =
  "http://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
const api_key = "36bb301d-fadf-4371-b97e-ede492f71f8d";
// export const useSearchStore = defineStore("searchStore", {
//   state: () => ({
//     loader: false,
//     movies: [],
//   }),
//   actions: {
//     async getMovies(search) {
//       this.loader = true;
//       const res = await axios.get(`${url}${search}`, {
//         headers: {
//           "X-API-KEY": api_key,
//         },
//       });
//       const data = await res.data;
//       this.movies = data.films;
//       this.loader = false;
//     },

//     addToUserMovies(obj) {
//       const movieStore = useMovieStore();

//       movieStore.movies.push({ ...obj, isWatched: false });
//       movieStore.activeTab = 1;
//     },
//   },
// });

export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const movies = ref([]);

  const getMovies = async (search) => {
    loader.value = true;
    const res = await axios.get(`${url}${search}`, {
      headers: {
        "X-API-KEY": api_key,
      },
    });
    const data = await res.data;
    movies.value = data.films;
    loader.value = false;
  };

  const addToUserMovies = (obj) => {
    const movieStore = useMovieStore();

    movieStore.movies.push({ ...obj, isWatched: false });
    movieStore.activeTab = 1;
  };

  return {
    loader,
    movies,
    getMovies,
    addToUserMovies,
  };
});
