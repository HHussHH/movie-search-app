import { defineStore } from "pinia";

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [
      {
        filmId: 1,
        nameEn: "Spider-Man",
        description:
          "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
        posterUrl:
          "https://kinopoiskapiunofficial.tech/images/posters/kp/590286.jpg",
        year: "2002-05-01",
        isWatched: false,
      },
      {
        filmId: 2,
        nameEn: "The Batman",
        description:
          "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        posterUrl:
          "https://kinopoiskapiunofficial.tech/images/posters/kp/590286.jpg",
        year: "2022-03-01",
        isWatched: false,
      },
    ],
    activeTab: 2,
  }),
  getters: {
    watchedMovies() {
      return this.movies.filter((el) => el.isWatched);
    },
    totalCountMovies() {
      return this.movies.length;
    },
  },
  actions: {
    setActiveTab(id) {
      this.activeTab = id;
    },
    toggleWatched(id) {
      const idx = this.movies.findIndex((el) => el.id === id);
      this.movies[idx].isWatched = !this.movies[idx].isWatched;
    },
    deleteMovie(id) {
      this.movies = this.movies.filter((el) => el.filmId !== id);
    },
  },
});
