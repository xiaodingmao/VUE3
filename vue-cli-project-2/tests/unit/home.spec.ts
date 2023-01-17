import { shallowMount } from '@vue/test-utils'
import {store} from '@/store'
import HomeView from '@/views/HomeView.vue'
import MovieHeader from '@/components/SearchHeader.vue'; // @ is an alias to /src
import SortTool from '@/components/SortTool.vue';
import MovieList from '@/components/MovieList.vue';

jest.mock('@/api/index.ts')

describe('test home.vue', () => {
  it('render correctly', () => {
    const wrapper = shallowMount(HomeView,{
      global: {
        plugins: [store]
      }
    })
    const home=wrapper.get('[data-test="home"]')
    expect(home.findComponent(MovieHeader).exists()).toBeTruthy()
    expect(home.findComponent(SortTool).exists()).toBeTruthy()
    expect(home.findComponent(MovieList).exists()).toBeTruthy()

  })
})