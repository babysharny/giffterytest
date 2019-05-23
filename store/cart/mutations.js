export function setCategories(state, list) {
  state.category.list = [state.category.all, ...list]
}

export function setBrands(state, brands) {
  state.brands = brands
}

export function setCategory(state, category) {
  state.category.selected = category
}

export function setFace(state, { id, face }) {
  state.faces = {
    ...state.faces,
    [id]: face
  }

}

export function setLocale(state, locale) {
  state.locale = locale
}

export function addToCart(state, { brand, face }) {
  const { cart } = state
  const item = cart.find(c => c.brand.id == brand.id && face == c.face)
  
  if (item) {
    state.cart = cart.map(c => {
      if (c.brand.id == brand.id && face == c.face) {
        c.count++
      }
      return c
    })
    return
  }

  state.cart = [...cart, {
    brandId: brand.id,
    face,
    brand,
    count: 1
  }]
}