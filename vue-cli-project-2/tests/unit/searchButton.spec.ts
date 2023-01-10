import { shallowMount } from '@vue/test-utils'
import SearchButton from '@/components/SearchButton.vue'
import { useStore } from '@/store/index'
/* const store = {
  commit: jest.fn()
} */
const store = useStore()

describe('test seachButton.vue', () => {
  it('render correctly', async () => {
    const wrapper = shallowMount(SearchButton, {
      props: {
        searchText: 'serach'
      },
      global: {
        /*  mocks: {
           store
         } */
        plugins: [store]
      }
    })
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(store.commit).toBeCalled()

  })
})