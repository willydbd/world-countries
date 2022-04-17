import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
    state: {
        countries: [],
    },
    getters: {
        countries(state) { 
          return state.countries
        },
        country(state){
            return (name) => {
                console.log(state.countries.find((country) => country.name.common === name))
                return state.countries.find((country) => country.name.common === name);
            }
        }
    },
    actions: {
        async getCountries({ commit }){
            try {
                const res = await axios.get('https://restcountries.com/v3.1/all')
                commit('SET_COUNTRIES', res.data)
            } catch (err) {
                console.log(err)
            }
          }
    },
    mutations: {
        SET_COUNTRIES: (state, countries) => (state.countries = countries)
    }
})

export default store;