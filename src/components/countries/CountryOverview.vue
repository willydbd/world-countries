<template class="ion-text-center">
    <ion-img :src="country.flags.png"></ion-img>
    <h4>Capital: <span v-for="capital in country.capital" :key="capital">{{ capital }}</span></h4>
</template>
<script>
import {
    IonImg 
    } from '@ionic/vue';
export default {
    props: ["country"],
    components: { 
        IonImg,
    },
}
</script>