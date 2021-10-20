import TextReel from "./index.vue";

export default {
  title: "Components/Molecules/TextReel",
  component: TextReel,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent: TextReel },
  props: Object.keys(argTypes),
  template: `<my-component v-bind="$props"></my-component>`,
});

export const Default = Template.bind({});
Default.args = {
  items: ["Hello world", "Second item", "Third item", "Fourth", "Fifth"],
};
