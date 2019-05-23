<template lang="pug">
  .section.shop-page
    .container
      .columns
        //- Cateories
        .column.is-3
          aside.menu
            p.menu-label Категории
            ul.menu-list
              li(v-for="c in categories")
                a(
                  @click="selectCategory(c)"
                  :class="{ 'is-active': c == category }"
                  ) {{ c.title }}
        //- Products
        .column.is-9
          h1.title {{ category.title }}
            //- pre {{ brandRows }}
          .columns.is-multiline
            .column.is-4-desktop.is-6-tablet(
              v-for='b in brands'
              :key="b.id"
              :class=""
              )
              .card
                .card-image
                  figure.image
                    img(:src='b.image', alt='Placeholder image')
                .card-content.is-centered
                  p.title {{ b.title }}
                  //- pre {{ face(b) }}
                  //- pre {{ faces }}
                  .buttons.has-addons
                    span.button(
                      v-for="f in b.faces"
                      @click="selectFace({ brand: b, face: f})"
                      :key="f"
                      :class="{ 'is-success is-selected': face(b) == f }"
                      ) {{ f }} p.

                footer.card-footer(v-show="face(b)")
                  a.card-footer-item(@click="buy(b)" href='#') в корзину
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'shop',
  data() {
    return {
    }
  },
  async created() {
    await this.fetchCategories()
    await this.fetchBrands()
    this.selectCategory(this.categoryAll)
  },
  computed: {
    ...mapGetters([
      'categories',
      'category',
      'categoryAll',
      'brands',
      'faces',
      'face',
      'cart'
    ])
  },
  methods: {
    ...mapActions([
      'fetchCategories',
      'fetchBrands',
      'selectCategory',
      'selectFace',
      'addToCart'
    ]),
    buy(b) {
      this.addToCart({ brand: b, face: this.face(b)})
    }
  }
}
</script>
