<template>
    <the-navigation></the-navigation>
    <main>
        <router-view />
    </main>
    <the-footer></the-footer>
</template>

<script>
import TheNavigation from "./components/ui/TheNavigation.vue";
import TheFooter from "./components/ui/TheFooter.vue";

export default {
    components: {
        TheNavigation,
        TheFooter,
    },
    data() {
        return {
            theTitle: "",
        };
    },
    provide() {
        return {
            theTitle: this.theTitle,
        };
    },
    methods: {
        getTheTitle(theTitle) {
            this.theTitle = theTitle;
            // console.log(theTitle);
        },
    },
    
};
</script>

<style lang="scss">
body {
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

main {
    padding-top: 70px;
}
</style>
