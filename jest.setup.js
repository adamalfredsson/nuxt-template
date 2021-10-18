import { config } from '@vue/test-utils';
import 'regenerator-runtime/runtime';
import Vue from 'vue';

Vue.config.silent = true;
Vue.config.ignoredElements = ['nuxt-link'];

config.stubs.nuxt = { template: '<div />' };
config.stubs['no-ssr'] = { template: '<span><slot /></span>' };

jest.useFakeTimers();

afterEach(() => {
  jest.clearAllMocks();
});
