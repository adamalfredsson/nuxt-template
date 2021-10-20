<template lang="pug">
article.z-card.bg-white.rounded.border.border-grayish-light.shadow-lg.p-6(:class="classes")
  slot
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'z-card',
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
.z-card {
}
</style>
