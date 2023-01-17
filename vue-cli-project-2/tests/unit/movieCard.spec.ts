import { shallowMount } from '@vue/test-utils'
import MovieCard from '@/components/MovieCard.vue'
import router from '@/router'

describe('test movieCard.vue', () =>{
  it('render correctly with props',()=>{
    const wrapper=shallowMount(MovieCard,{
      props:{
        movie:{
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
        }
      },
      global: {
        plugins: [router]
      }
    })
    const movieCard=wrapper.get('[data-test="movie-card"]')
    expect(movieCard.text()).toContain('Guardians of the Galaxy')
  })
})