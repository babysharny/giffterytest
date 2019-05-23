<template lang="pug">
  nav.navbar.header.has-shadow.is-primary(role='navigation', aria-label='main navigation')
    .container
      //- Logo
      .navbar-brand
        a.navbar-item(href='/')
          img(src='~assets/buefy.png', alt='Buefy', height='28')

        a.navbar-burger.burger(
          @click="showMenu = !showMenu"
          :class="{ 'is-active': showMenu }"
          role="button"
          aria-label="menu"
          aria-expanded="true"
          data-target="navbar-menu"
          )
          span
          span
          span

      #navbar-menu.navbar-menu(:class="{ 'is-active': showMenu }")
        .navbar-start
          a.navbar-item
            | Home
          a.navbar-item
            | Documentation
          .navbar-item.has-dropdown.is-hoverable
            a.navbar-link
              | More
            .navbar-dropdown
              a.navbar-item
                | About
              a.navbar-item
                | Jobs
              a.navbar-item
                | Contact
              hr.navbar-divider
              a.navbar-item
                | Report an issue
        .navbar-end
          .navbar-item
            .buttons
              a.button.is-primary
                strong Sign up
              a.button.is-light
                | Log in
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  }
}
</script>
