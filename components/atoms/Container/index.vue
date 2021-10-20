<template lang="pug">
.z-container.container(:class='classes')
  slot
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'z-container',
  props: {},
  setup() {
    const classes = computed(() => []);
    return { classes };
  }
});
</script>

<style lang="scss" scoped>
.z-container {
}
</style>
