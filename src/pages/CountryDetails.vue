<template>
    <base-layout :page-title="loadedCountry ? loadedCountry.name.common : 'Loading...'">
    <h4 v-if="!loadedCountry">Could not find the country you looking for</h4>
    <span v-else>
        <country-overview :country="loadedCountry"></country-overview>
    </span>
    </base-layout>
</template>
<script>
import CountryOverview from "../components/countries/CountryOverview.vue"
export default {
    components: { 
        CountryOverview,
    },
    data(){
        return{
           name: this.$route.params.id, 
        }
    },
    computed: {
        loadedCountry() {
            return this.$store.getters.country(this.name);
        }
    }
}
</script>