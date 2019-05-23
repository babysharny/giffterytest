import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

// Modules
import cart from './cart'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        cart,
        // tabs,
        // projects,
        // votes,
    },
    actions: {
        nuxtServerInit ({ commit, dispatch }, { env, req, app }) {
            // console.log('Nuxt server side store init.')

            // let _mz_token = app.$cookies.get('_mz_token')
            // if (!_mz_token || !Object.keys(_mz_token)[0]) {
            //     _mz_token = null
            // }
            // console.log('Token from cookie:')
            // console.log(_mz_token)
            // dispatch('SET_TOKEN', _mz_token)
        },
    }

})

export default store
