import Block from "./index.vue";

export default {
  title: "Components/Atoms/Block",
  component: Block,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent: Block },
  props: Object.keys(argTypes),
  template: `<my-component v-bind="$props"></my-component>`,
});

export const Default = Template.bind({});
Default.args = {};
