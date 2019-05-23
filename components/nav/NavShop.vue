<template lang="pug">
  nav.navbar.header.has-shadow.is-primary(role='navigation', aria-label='main navigation')
    .container
      //- Logo
      .navbar-brand
        nuxt-link.navbar-item.is-pulled-right(tag="a" to='/shop')
          img(src='~assets/logo.svg', alt='gifftery', width='150' height='auto')

        //- a.navbar-burger.burger(
        //-   @click="showMenu = !showMenu"
        //-   :class="{ 'is-active': showMenu }"
        //-   role="button"
        //-   aria-label="menu"
        //-   aria-expanded="true"
        //-   )
        //-   span
        //-   span
        //-   span

      .navbar-end
        .navbar-item
          nuxt-link.button.is-primary(tag="a" to="/cart")
            strong Cart {{ cartCount }} / {{ cartSum }} p.
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      showMenu: false
    }
  },
  computed: {
    ...mapGetters(['cartSum', 'cartCount'])
  }
}
</script>

<style lang="scss">
// $navbar-breakpoint: $desktop;
</style>
