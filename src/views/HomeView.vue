<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <home-banner></home-banner>
        <home-products></home-products>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeBanner from "@/components/home/HomeBanner.vue";
import HomeProducts from "@/components/home/HomeProducts.vue";

export default {
    name: "HomeView",
    components: {
        // HelloWorld
        HomeBanner,
        HomeProducts,
    },
};
</script>

<style>
.home {
    /* overflow-y: scroll; */
    /* height: 100vh; */
    /* scroll-snap-type: y mandatory; */
    overflow: auto;
}
section {
    height: 100vh;
    scroll-snap-align: start;
}
</style>
