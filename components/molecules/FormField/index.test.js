import { shallowMount } from '@vue/test-utils';
import FormField from './index.vue';

describe('FormField', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FormField, {
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
