<template lang="pug">
button.z-button(:class="classes")
  slot
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'z-button',
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
.z-button {
}
</style>
