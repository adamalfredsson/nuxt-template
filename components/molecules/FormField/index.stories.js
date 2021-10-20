import FormField from './index.vue';

export default {
  title: 'Components/Molecules/FormField',
  component: FormField,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent: FormField },
  props: Object.keys(argTypes),
  template: `<my-component v-bind="$props"></my-component>`,
});

export const Default = Template.bind({});
Default.args = {};
