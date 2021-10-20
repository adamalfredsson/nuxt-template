<template lang="pug">
span.z-text-reel.relative.overflow-hidden(:class="classes")
  transition(name="spinning")
    span.whitespace-nowrap(:key="current") {{ current }}
  span.invisible {{ current }}
</template>

<script>
import {
  defineComponent,
  computed,
  onMounted,
  ref,
  onUnmounted,
} from "@nuxtjs/composition-api";
import { and, each, isString, minLength } from "~/utils/validation/base";

export default defineComponent({
  name: "z-text-reel",
  props: {
    items: {
      type: Array,
      required: true,
      validator: and(each(isString), minLength(2)),
    },
  },
  setup(props) {
    const classes = computed(() => []);
    const currentIndex = ref(0);
    const current = computed(() => props.items[currentIndex.value]);
    let interval;
    onMounted(() => {
      interval = setInterval(() => {
        const nextIndex = currentIndex.value + 1;
        currentIndex.value = nextIndex === props.items.length ? 0 : nextIndex;
      }, 3000);
    });
    onUnmounted(() => {
      clearInterval(interval);
    });
    return {
      classes,
      current,
    };
  },
});
</script>

<style lang="scss" scoped>
.z-text-reel {
  span:not(.invisible) {
    transition: all 1s ease;
  }

  span.invisible {
    display: none;
  }
}

.spinning-enter-active,
.spinning-leave-active {
  position: absolute;
  left: 0;

  + span.invisible {
    display: inline-block;
  }
}

.spinning-leave-to {
  transform: translateY(-100%);
  opacity: 0%;
}

.spinning-enter {
  transform: translateY(100%);
  opacity: 0%;
}

.spinning-enter-to,
.spinning-leave {
  opacity: 100%;
}
</style>
