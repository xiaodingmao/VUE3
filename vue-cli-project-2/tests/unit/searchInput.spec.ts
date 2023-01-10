import { DOMWrapper, VueWrapper, shallowMount } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput.vue'

describe('test SearchInput.vue', () => {
  let wrapper: VueWrapper<any>
  let input: DOMWrapper<HTMLInputElement>
  beforeEach(() => {
    wrapper = shallowMount(SearchInput)
    input = wrapper.find('input')
  })
  afterEach(() => {
    wrapper.unmount()
  })

  it('render searchInput', async () => {

    await input.setValue('hello')
    expect(input.element.value).toMatch('hello')
  })
  it('emits the input to its parent', async () => {
    await input.setValue('123')
    const updateEvent=wrapper.emitted()
    expect(updateEvent).toHaveProperty('update:modelValue')
    expect(updateEvent['update:modelValue'][0]).toEqual(['123'])
  })

})