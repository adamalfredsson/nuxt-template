<template lang="pug">
#app
  .relative.min-h-screen.flex.flex-col.bg-grayish-lighter
    z-header
    nuxt
    z-footer
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'layout-default',
});
</script>
