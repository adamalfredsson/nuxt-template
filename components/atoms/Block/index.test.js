import { shallowMount } from '@vue/test-utils';
import Block from './index.vue';

describe('Block', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Block, {
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
