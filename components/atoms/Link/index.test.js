import { shallowMount } from '@vue/test-utils';
import Link from './index.vue';

describe('Link', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Link, {
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
