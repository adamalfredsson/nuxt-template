import { shallowMount } from '@vue/test-utils';
import Container from './index.vue';

describe('Container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Container, {
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
