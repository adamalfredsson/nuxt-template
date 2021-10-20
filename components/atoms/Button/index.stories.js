import Button from './index.vue';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent: Button },
  props: Object.keys(argTypes),
  template: `<my-component v-bind="$props"></my-component>`,
});

export const Default = Template.bind({});
Default.args = {};
