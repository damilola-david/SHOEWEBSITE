<template>
    <HeroSectionVue></HeroSectionVue>
    <AvailableBrandsVue></AvailableBrandsVue>
    <TheGiftsVue></TheGiftsVue>
    <CtaSectionVue></CtaSectionVue>
</template>
<script>
import HeroSectionVue from './HeroSection.vue';
import AvailableBrandsVue from './AvailableBrands.vue';
import TheGiftsVue from './TheGifts.vue';
import CtaSectionVue from './CtaSection.vue';
export default{
    components:{
        HeroSectionVue,
        AvailableBrandsVue,
        TheGiftsVue,
        CtaSectionVue
    }
}
</script>