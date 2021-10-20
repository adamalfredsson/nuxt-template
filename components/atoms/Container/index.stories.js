import Container from "./index.vue";

export default {
  title: "Components/Atoms/Container",
  component: Container,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent: Container },
  props: Object.keys(argTypes),
  template: `<my-component v-bind="$props"></my-component>`,
});

export const Default = Template.bind({});
Default.args = {};
