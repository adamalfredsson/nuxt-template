<template lang="pug">
section.z-block.py-16(:class="classes")
  slot
</template>

<script>
import { defineComponent, computed } from "@nuxtjs/composition-api";
import { isBackground } from "~/utils/validation/background";

export default defineComponent({
  name: "z-block",
  props: {
    background: {
      type: Object,
      required: false,
      default: () => ({}),
      validator: isBackground,
    },
  },
  setup(props) {
    const imageClasses = computed(() => {
      const { image } = props.background
      if (!image) return [];
      return [
        {
          parallax: image.parallax,
          cover: image.cover,
        },
      ];
    })
    const classes = computed(() => {
      const collect = [...imageClasses.value];
      const { background } = props;

      if (background.color != null) {
        collect.push('bg-' + background.color);
      }
      if (background.blend != null) {
        collect.push('bg-blend-' + background.blend);
      }
      return collect;
    });
    return { classes };
  },
});
</script>

<style lang="scss" scoped>
.z-block {
}
</style>
