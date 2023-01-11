import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import MovieHeader from '@/components/SearchHeader.vue'; // @ is an alias to /src
import SortTool from '@/components/SortTool.vue';
import MovieList from '@/components/MovieList.vue';

describe('test home.vue', () => {
  it('render correctly', () => {
    const wrapper = shallowMount(HomeView)
    const home=wrapper.get('[data-test="home"]')
    expect(home.findComponent(MovieHeader).exists()).toBeTruthy()
    expect(home.findComponent(SortTool).exists()).toBeTruthy()
    expect(home.findComponent(MovieList).exists()).toBeTruthy()

  })
})