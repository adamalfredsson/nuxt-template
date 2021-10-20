import Link from './index.vue';

export default {
  title: 'Components/Atoms/Link',
  component: Link,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent: Link },
  props: Object.keys(argTypes),
  template: `<my-component v-bind="$props"></my-component>`,
});

export const Default = Template.bind({});
Default.args = {};
