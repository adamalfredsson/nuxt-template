<template lang="pug">
img.z-image(:class="classes", :src="src")
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'z-image',
  props: {
    image: {
      type: String,
      required: false
    },
  },
  setup({ image }, { attrs }) {
    const classes = computed(() => []);
    const src = computed(() => {
      const isUrl = image.startsWith('http');
      return isUrl ? image : require(`~/assets/images/${image}`);
    });
    return { classes, src };
  }
});
</script>

<style lang="scss" scoped>
.z-image {
}
</style>
