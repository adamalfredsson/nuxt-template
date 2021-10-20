<template lang="pug">
label.z-form-field(:class="classes")
  span.text-gray.text-sm(v-if="label") {{ label }}
  .relative.flex.items-center
    slot(name="pre")
    slot(name="default")
      component.input.w-full.px-4.border.border-solid.border-gray.outline-none(
        :is="multiline ? 'textarea' : 'input'",
        v-bind="$attrs",
        @input="$emit('update', $event.target.value)",
        v-on="$listeners"
      )
    .detail.absolute.right-4(v-if="$slots.detail")
      slot(name="detail")
  span.text-danger.text-sm(v-if="error") {{ error }}
</template>

<script>
import { defineComponent, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "z-form-field",
  inheritAttrs: false,
  model: {
    event: "update",
  },
  props: {
    label: {
      type: String,
      required: false,
    },
    error: {
      type: String,
      required: false,
    },
    multiline: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    const classes = computed(() => []);
    return {
      classes,
    };
  },
});
</script>

<style lang="scss" scoped>
.z-form-field {
  input {
    @apply h-10 py-0;
  }

  textarea {
    @apply h-20 py-2;
  }
}
</style>
