export async function setLocale({ commit }, locale) {
  commit('setLocale', locale)
  this.$i18n.locale = locale
}