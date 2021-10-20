<template lang="pug">
z-block.z-hero(:class="classes", :background="background")
  z-container
    slot
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api';
import { isBackground } from '~/utils/validation/background';

export default defineComponent({
  name: 'z-hero',
  props: {
    background: {
      type: Object,
      required: false,
      default: () => ({}),
      validator: isBackground,
    },
  },
  setup(props) {
    const classes = computed(() => []);
    return {
      classes,
    };
  }
});
</script>

<style lang="scss" scoped>
.z-hero {
}
</style>
