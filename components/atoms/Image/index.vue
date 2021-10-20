<template lang="pug">
img.z-image(:class="classes", :src="src")
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'z-image',
  props: {
    asset: {
      type: String,
      required: false
    },
  },
  setup(props, { attrs }) {
    const classes = computed(() => []);
    const src = computed(() => props.asset ? require(`~/assets/images/${props.asset}`) : attrs.src);
    return { classes, src };
  }
});
</script>

<style lang="scss" scoped>
.z-image {
}
</style>
