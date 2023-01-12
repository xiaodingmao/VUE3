import { DOMWrapper, VueWrapper, shallowMount } from '@vue/test-utils'
import SwitchButton from '@/components/SwitchButton.vue'


describe('test SwitchButton', () => {
  let wrapper: VueWrapper<any>
  let button: Omit<DOMWrapper<HTMLElement>, "exists">
  const nameTags = ['RELEASE DATE', 'RATING']
  beforeEach(() => {
    wrapper = shallowMount(SwitchButton, {
      props: { nameTags }
    })
    button = wrapper.get('[data-test="sw-button"]')

  })
  afterEach(() => {
    wrapper.unmount()
  })

  it('render button', () => {
    expect(button.text()).toMatch(/RATING/)
  })
  it('active button', async () => {
    await button.trigger('click')
    expect(button.classes()).toContain('active')
  })
})