<template lang="pug">
section.z-block.py-16.bg-cover(:class="classes", :style="styles")
  slot
</template>

<script>
import { defineComponent, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "z-block",
  props: {
    background: {
      type: String,
      required: false
    },
  },
  setup({ background }) {
    const classes = computed(() => []);
    const styles = computed(() => {
      const collect = [];
      if (background) {
        const isUrl = background.startsWith('http');
        collect.push({
          backgroundImage: `url(${isUrl ? background : require(`~/assets/images/${background}`)}`
        });
      }
      return collect;
    })
    return { classes, styles };
  },
});
</script>

<style lang="scss" scoped>
.z-block {
}
</style>
