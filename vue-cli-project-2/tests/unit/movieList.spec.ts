import { shallowMount } from '@vue/test-utils'
import MovieList from '@/components/MovieList.vue'
import { key } from '@/store/index'
import { createStore } from 'vuex'
import router from '@/router'

describe('test movieList.vue', () => {
  it('render correctly when the list is null', () => {
    const store = createStore({
      getters: {
        filterMovie: () => jest.fn(() => [])
      }
    })
    const wrapper = shallowMount(MovieList, {
      global: {
        plugins: [[store, key],router]
      }
    })
    const nullDiv = wrapper.find('[data-test="list-null"]')
    expect(nullDiv.exists()).toBe(true)
  })
  it('render correctly when the list is not null', () => {
    const store = createStore({
      getters: {
        filterMovie: () => jest.fn(() => [
          {
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
        ])
      }
    })
    const wrapper = shallowMount(MovieList, {
      global: {
        plugins: [[store, key]]
      }
    })
    const list = wrapper.find('[data-test="list"]')
    expect(list.exists()).toBe(true)
  })
})