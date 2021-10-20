<template lang="pug">
a.z-link.whitespace-nowrap(:class="classes")
  slot
  span.ml-4(v-if="!noArrow")
    | →
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'z-link',
  props: {
    noArrow: {
      type: Boolean,
      default: false
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
.z-link {
}
</style>
