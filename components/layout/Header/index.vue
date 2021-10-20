<template lang="pug">
header.z-header.py-8.bg-grayish-dark(:class='classes')
  z-container
    z-image.h-8(asset='logo.svg')
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'z-header',
  props: {},
  setup() {
    const classes = computed(() => []);
    return { classes };
  }
});
</script>

<style lang="scss" scoped>
.z-header {
}
</style>
