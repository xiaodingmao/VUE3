import {  shallowMount } from '@vue/test-utils'
import NoFilms from '@/components/NoFilms.vue'

describe('test noFilms.vue',()=>{
  it('render noFilms correctly',()=>{
    const wrapper=shallowMount(NoFilms)
    expect(wrapper.get('.container').text()).toMatch('No films found')
  })
})