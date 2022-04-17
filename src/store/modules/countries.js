import axios from 'axios'

const state = {
    allCountries : [],
}

const getter = {
    allCountries: (state) => state.allCountries
}

const actions = {
    async getCountries({ commit }){
        const res = await axios.get('https://restcountries.com/v3.1/all')
        commit('setCountries', res.data)
        console.log(res)
      }
}
const mutations = {
    setCountries: (state, allCountries) => (state.allCountries = allCountries)
}
export default {
    state,
    getter,
    actions,
    mutations,
}