import { VueWrapper, shallowMount } from '@vue/test-utils'
import SortTool from '@/components/SortTool.vue'
import { store } from '@/store/index'


describe('test sortTool.vue', () => {
  let wrapper: VueWrapper<any>
  beforeEach(() => {

    wrapper = shallowMount(SortTool,{
      global:{
        plugins:[store]
      }
    })
  })
  afterEach(() => {
    wrapper.unmount()
  })

  it('render sortTool correctly', () => {
    const button = wrapper.get('[data-test="sort-button"]')
    const count = wrapper.get('[data-test="sort-count"]')
    expect(button.text()).toContain('SORT BY')
    expect(count.text()).toMatch(/movies found/)
  })
})