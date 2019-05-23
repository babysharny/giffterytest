<template lang="pug">
div
  //- NavMenu
  NavShop
  .main-content
    nuxt

</template>

<script>
import NavMenu from '@/components/nav/NavMenu'
import NavShop from '@/components/nav/NavShop'
export default {
  components: {
    NavMenu,
    NavShop
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {

  }
}
</script>
