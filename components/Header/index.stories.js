import Header from "./index.vue";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent: Header },
  props: Object.keys(argTypes),
  template: `<my-component v-bind="$props"></my-component>`,
});

export const Default = Template.bind({});
Default.args = {};
