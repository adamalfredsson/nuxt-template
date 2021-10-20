import { shallowMount } from '@vue/test-utils';
import Card from './index.vue';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Card, {
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
