<template>
    <section class="banner">
        <img ref="banner_bottle" class="banner_pic" src="../../assets/home/banner/hoptimum.png" />
        <h2 ref="banner_context">THE BEER WILL<br />BLOW YOUR<br />DAMN MIND</h2>
    </section>
</template>

<script>
import { TimelineLite } from "gsap";
export default {
    mounted() {
        const banner_bottle = this.$refs.banner_bottle;
        const banner_context = this.$refs.banner_context;
        const timeline = new TimelineLite();

        timeline.to(banner_bottle, 1, { y: -200, opacity: 1 });
        timeline.to(banner_context, 1, { y: 0, opacity: 1 });
    },
};
</script>

<style scoped lang="scss">
.banner {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #77b329;
    position: relative;
    overflow: hidden;
    .banner_pic {
        height: 88vh;
        position: absolute;
        bottom: -200px;
        opacity: 0;
    }
    h2 {
        position: relative;
        color: #fff;
        font-family: "Baloo Tamma 2", cursive;
        font-family: "Montserrat", sans-serif;
        font-weight: 900;
        font-size: 90px;
        text-align: center;
        opacity: 0;
    }
}
@media screen and (max-width: 992px) {
    .banner {
        h2 {
            font-size: 70px;
        }
    }
}
</style>
