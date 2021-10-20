import { shallowMount } from '@vue/test-utils';
import Footer from './index.vue';

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Footer, {
      propsData: {},
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('mounts', () => {
    expect(wrapper).toBeDefined();
  });
});
