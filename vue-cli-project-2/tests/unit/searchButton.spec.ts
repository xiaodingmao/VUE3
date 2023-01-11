import { DOMWrapper, VueWrapper, shallowMount } from '@vue/test-utils'
import SearchButton from '@/components/SearchButton.vue'
import { store, key } from '@/store/index'


describe('test seachButton.vue', () => {
  let wrapper: VueWrapper<any>
  let button: DOMWrapper<HTMLElement>

  beforeEach(() => {
     wrapper = shallowMount(SearchButton, {
      props: {
        searchText: 'search'
      },
      global: {
        plugins: [[store,key]]
      }
    })
   button = wrapper.find('button')
  })
  afterEach(() => {
    wrapper.unmount()
  })
  it('render correctly', () => {
    expect(button.text()).toContain('SEARCH')
    
  })
  it('check click event',async ()=>{
    await button.trigger('click')
    expect(store.state.searchText).toBe('search')
  })
})