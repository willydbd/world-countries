<template>
    <ion-list>
        <country-list-item
        v-for="country in countries"
        :key="country"
        :country="country"
        >
        </country-list-item>
    </ion-list>
</template>
<script>
import { 
    IonList,
    } from '@ionic/vue';

import CountryListItem from "./CountryListItem.vue"
export default {
    props: ["countries"],
    components: {
        CountryListItem,
        IonList,
    },
}
</script>