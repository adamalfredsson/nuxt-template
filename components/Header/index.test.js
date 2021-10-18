import { shallowMount } from "@vue/test-utils";
import Header from "./index.vue";

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Header, {
      propsData: {},
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("mounts", () => {
    expect(wrapper).toBeDefined();
  });
});
