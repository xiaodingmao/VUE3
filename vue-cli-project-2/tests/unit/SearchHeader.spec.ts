import { shallowMount } from '@vue/test-utils'
import SearchHeader from '@/components/SearchHeader.vue'

describe('test searchHeader.vue', () => {
  it('render components correctly', () => {
    const wrapper=shallowMount(SearchHeader)
    const header=wrapper.get('[data-test="search-header"]')
    expect(header.text()).toContain('FIND YOUR MOVIE')
    expect(header.text()).toContain('SREACH BY')

  })
})