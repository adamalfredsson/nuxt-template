import Hero from './index.vue';

export default {
  title: 'Components/Blocks/Hero',
  component: Hero,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent: Hero },
  props: Object.keys(argTypes),
  template: `<my-component v-bind="$props"></my-component>`,
});

export const Default = Template.bind({});
Default.args = {};
