import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue'
import { FilmItem } from '../assets/filmType';
import { movies } from '../utils/movies'
type FilmList = FilmItem[]
// define your typings for the store state
export interface State {
  movieList: FilmList,
  searchText: string,
  searchBy: 'title' | 'genres',
  sortBy: 'vote_count' | 'release_date',
}
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    movieList: movies,
    searchText: '',
    searchBy: 'title',
    sortBy: 'release_date'
  },
  getters: {
    getMovieDeatilById: (state) => (id: number) => {
      return state.movieList.find(movie => movie.id === id)
    },
    filterMovie: (state) => () => {
      if (!state.searchText) {
        return state.movieList.sort((a, b) => {
          if (a[state.sortBy] < b[state.sortBy]) {
            return -1
          }
          if (a[state.sortBy] > b[state.sortBy]) {
            return 1
          }
          return 0
        })
      }
      return state.movieList.filter(movie => movie[state.searchBy].includes(state.searchText))
        .sort((a, b) => {
          if (a[state.sortBy] < b[state.sortBy]) {
            return -1
          }
          if (a[state.sortBy] > b[state.sortBy]) {
            return 1
          }
          return 0
        })
    },
    getMoviesCounts: (state, getters) => () => {
      return getters.filterMovie().length
    }
  },
  mutations: {
    setSearchText(state, payload) {
      state.searchText = payload
    },
    setSearchBy(state, payload) {
      state.searchBy = payload
    },
    setsortBy(state, payload) {
      state.sortBy = payload
    }
  },
  actions: {
  },
  modules: {
  },
});
// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}