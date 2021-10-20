<template lang="pug">
footer.z-footer.py-8.bg-grayish-dark.text-white(:class="classes")
  z-container
    form(@submit.prevent="onConnect()")
      h3 Stay in the loop
      z-form-field.text-black(placeholder="Enter your email")
        template(#detail)
          z-button(type="submit") Connect

</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'z-footer',
  props: {},
  setup(props) {
    const classes = computed(() => []);
    return {
      classes,
    };
  }
});
</script>

<style lang="scss" scoped>
.z-footer {
}
</style>
