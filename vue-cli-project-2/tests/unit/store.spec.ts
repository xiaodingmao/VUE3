import { store } from '@/store/index'

 const movieList = [{
    "id": 447365,
    "title": "Guardians of the Galaxy Vol. 3",
    "tagline": "",
    "vote_average": 0,
    "vote_count": 9,
    "release_date": "2020-05-01",
    "poster_path": "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
    "overview": "The third film based on Marvel's Guardians of the Galaxy.",
    "budget": 0,
    "revenue": 0,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "runtime": 50
  },
  {
    "id": 424785,
    "title": "Transformers 7",
    "tagline": "",
    "vote_average": 0,
    "vote_count": 12,
    "release_date": "2019-06-26",
    "poster_path": "https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg",
    "overview": "Plot unknown.",
    "budget": 0,
    "revenue": 0,
    "genres": [
      "Science Fiction",
      "Action",
      "Adventure"
    ],
    "runtime": 120
  },]
describe('test vuex', () => {
 
  describe('test vuex mutation in isolation', () => {
    it('test setMovieDate mutation', () => {
      store.commit('setMovieData', movieList)
      expect(store.state.movieList).toHaveLength(2)
    })
    it('test setSearchText mutation', () => {
      store.commit('setSearchText', 'dd')
      expect(store.state.searchText).toBe('dd')
    })
    it('test setSearchBy mutation', () => {
      store.commit('setSearchBy', 'title')
      expect(store.state.searchBy).toBe('title')
    })
    it('test setsortBy mutation', () => {
      store.commit('setsortBy', 'date')
      expect(store.state.sortBy).toBe('date')
    })

  })

  describe('test vuex getters', () => {
    beforeEach(() => {
      store.commit('setMovieData', movieList)
    })
    it('test getMovieDeatilById getters', () => {
      const movie = store.getters.getMovieDeatilById(424785)
      expect(movie.title).toBe('Transformers 7')
    })
    it('test filterMovie getters when the searchText is null and sortby date', () => {
      store.getters.filterMovie()
      // console.log(store.state.movieList)
      expect(store.state.movieList[0].title).toContain('Guardians')
    })
    it('test filterMovie getters when the searchText is null and sortby vote_count', () => {
      store.commit('setsortBy', 'vote_count')
     store.getters.filterMovie()
      expect(store.state.movieList[0].title).toContain('Guardians')
    })
    it('test filterMovie getters when searchBy title and sortby date', () => {
      store.commit('setSearchText', 'Guardians')
      const filterList = store.getters.filterMovie()
      expect(filterList[0].title).toMatch(/Guardians/)
    })
    it('test filterMovie getters when it search nothing', () => {
      store.commit('setSearchText', 'dd')
      const filterList = store.getters.filterMovie()
      expect(filterList).toHaveLength(0)
    })
    it('test getMoviesCounts getters',()=>{
      store.commit('setSearchText', 'Guardians')
      store.getters.filterMovie()
      const count=store.getters.getMoviesCounts()
      expect(count).toBe(1)
    }
    )
  })
})
