import { shallowMount } from '@vue/test-utils';
import Button from './index.vue';

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Button, {
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
