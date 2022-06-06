<template>
    <span>
    <ion-img :src="country.flags.png"></ion-img>
        <h4>Capital: <span v-for="capital in country.capital" :key="capital">{{ capital }}</span></h4>
        <h4>Population: {{ country.population }}</h4>
        <h4>Currency: <span v-for="currency in country.currencies" :key="currency">{{ currency.name }}</span></h4>
        <h4>Continent: <span v-for="continent in country.continents" :key="continent">{{ continent }}</span></h4>
        <h4>Language Spoken: <span v-for="language in country.languages" :key="language">{{ language }},</span></h4>
        <h4>Time Zone: <span v-for="timezone in country.timezones" :key="timezone">{{ timezone }},</span></h4>
        <h4>UN Member: <span v-if="country.unMember">Yes</span> <span v-if="!country.unMember">No</span></h4>
    </span>
</template>
<script>
import {
    IonImg,
    } from '@ionic/vue';
export default {
    props: ["country"],
    components: { 
        IonImg,
    },
}
</script>