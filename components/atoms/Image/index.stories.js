import Image from "./index.vue";

export default {
  title: "Components/Atoms/Image",
  component: Image,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent: Image },
  props: Object.keys(argTypes),
  template: `<my-component v-bind="$props"></my-component>`,
});

export const Default = Template.bind({});
Default.args = {};
