
// Categories
export const categories = state => state.category.list
export const categoryAll = ({ category: { all } }) => all
export const category = ({ category: { selected } }) => selected

// Brands
export const allBrands = state => state.brands
export const brands = ({ brands, category: { selected, list }}) => {
  if (selected.id == 0) return brands
  return brands.filter(b => b.categories.includes(selected.id))
}

// Brands faces
export const faces = state => state.faces
export const face = state => brand => {
  return state.faces[brand.id]
}

// Cart
export const cart = state => state.cart
export const cartSum = state => state.cart.reduce((sum, i) => sum + (i.count * i.face), 0)
export const cartCount = state => state.cart.reduce((sum, i) => sum + i.count, 0)
