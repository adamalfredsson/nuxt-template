import { shallowMount } from '@vue/test-utils';
import Hero from './index.vue';

describe('Hero', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Hero, {
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
