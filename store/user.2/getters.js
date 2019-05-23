export const checkPermissions = state => roles => {
  return roles.includes(state.user.role.type)
}

export const locale = state => state.locale
export const isEng = state => state.locale == 'en'