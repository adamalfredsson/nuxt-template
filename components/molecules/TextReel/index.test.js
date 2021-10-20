import { shallowMount } from '@vue/test-utils';
import TextReel from './index.vue';

describe('TextReel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TextReel, {
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
