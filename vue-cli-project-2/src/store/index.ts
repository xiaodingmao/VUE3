import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue'
import { FilmItem } from '../assets/filmType';
//import { movies } from '../utils/movies'
import { getMovies } from '@/api';
type FilmList = FilmItem[]
// define your typings for the store state
export interface State {
  movieList: FilmList,
  searchText: string,
  searchBy: 'title' | 'genres',
  sortBy: 'averageRating' | 'releaseDate',
}
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    movieList: [],
    searchText: '',
    searchBy: 'title',
    sortBy: 'releaseDate'
  },
  getters: {
    getMovieDeatilById: (state) => (id: number) => {
      return state.movieList.find(movie => movie.id == id)
    },
    filterMovie: (state) => () => {
      if (!state.searchText && state.movieList.length > 0) {
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
      const filterList = state.movieList.filter(movie => movie[state.searchBy].includes(state.searchText))
      if (filterList.length <= 0) return filterList
      return filterList.sort((a, b) => {
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
    },
    setMovieData(state, payload) {
      state.movieList = payload
    }
  },
  actions: {
    async getInitalMovieList({ commit }) {
      commit('setMovieData', await getMovies())
    }
  },
  modules: {
  },
});
// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}