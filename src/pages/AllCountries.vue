<template>
    <base-layout page-title= "All Countries">
        <countries-list
        :countries ="countries"
        >
        </countries-list>
    </base-layout>
</template>
<script>

import CountriesList from "../components/countries/CountriesList.vue";
export default {
    name: 'AllCountries',
    components: {
        CountriesList,
    },
    computed: {
        countries(){
            return this.$store.getters.countries;
        }
    },
    created(){
        this.$store.dispatch('getCountries')
    }
}
</script>