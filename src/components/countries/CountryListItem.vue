<template>
    <ion-item :router-link="'/country/' +country.name.common">
        <ion-thumbnail slot="start">
            <ion-img :src="country.flags.png"></ion-img>
        </ion-thumbnail>
        <ion-label>
            {{ country.name.common}} <br>
            <ion-note color="dark"> </ion-note>
            <small>{{ country.population}}</small>
        </ion-label>
        <ion-label>
        </ion-label>
    </ion-item>
</template>
<script>
import { 
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
    IonNote,
    } from '@ionic/vue';
export default {
    props:['country'],
    components: {
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel,
        IonNote,
    },
}
</script>