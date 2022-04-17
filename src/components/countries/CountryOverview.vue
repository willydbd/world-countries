<template>
    <ion-img :src="country.flags.png"></ion-img>
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