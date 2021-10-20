import Footer from './index.vue';

export default {
  title: 'Components/Layout/Footer',
  component: Footer,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent: Footer },
  props: Object.keys(argTypes),
  template: `<my-component v-bind="$props"></my-component>`,
});

export const Default = Template.bind({});
Default.args = {};
