<template lang="pug">
.z-header(:class='classes')
  | Header
</template>

<script>
export default {
  name: 'z-header',
  props: {},
  data() {
    return {};
  },
  computed: {
    classes() {
      return [];
    },
  },
};
</script>

<style lang="scss" scoped>
.z-header {
}
</style>
