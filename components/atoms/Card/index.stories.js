import Card from './index.vue';

export default {
  title: 'Components/Atoms/Card',
  component: Card,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent: Card },
  props: Object.keys(argTypes),
  template: `<my-component v-bind="$props"></my-component>`,
});

export const Default = Template.bind({});
Default.args = {};
