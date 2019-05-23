<template lang="pug">
  pre {{ cart }}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['cart'])
  }
}
</script>
