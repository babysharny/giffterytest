
export async function fetchCategories({ commit }) {
  const categories = await this.$axios.$get('https://raw.githubusercontent.com/giftery-lobas/frontend-test/master/categories.json')
  commit('setCategories', categories)
}

export async function fetchBrands({ commit }) {
  const brands = await this.$axios.$get('https://raw.githubusercontent.com/giftery-lobas/frontend-test/master/brands.json')
  commit('setBrands', brands)
}

export async function selectCategory({ commit }, category) {
  commit('setCategory', category)
}

export async function selectFace({ commit }, { brand, face }) {
  commit('setFace', { id: brand.id, face })
}

export async function addToCart({ commit, dispatch }, { brand, face }) {
  commit('addToCart', { brand, face })
  dispatch('selectFace', { brand, face: null })
}

export async function removeFromCard({ commit }, { brand, face }) {
  // commit()
}