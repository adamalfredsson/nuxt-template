import { shallowMount } from '@vue/test-utils';
import Image from './index.vue';

describe('Image', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Image, {
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
