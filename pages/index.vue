<template lang="pug">
section.section
  nuxt-link.button.is-primary(tag="button", to="/shop") В магазин!
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  }
}
</script>
