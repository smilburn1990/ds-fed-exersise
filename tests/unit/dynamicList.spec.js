import { mount } from '@vue/test-utils'
import DynamicList from '@/components/DynamicList'

describe('DynamicList component', () => {
  const wrapper = mount(DynamicList)
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('receives the correct props', () => {
    expect(typeof wrapper.vm.$options.props.data).toBe('object')
  })
  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
})
