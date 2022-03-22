<template>
    <section class="home_taps">
        <h3>ON TAP</h3>
        <ul class="tap_wrap">
            <li class="tap_info" v-for="onTap in onTaps" :key="onTap.name">
                <a href="">{{ onTap.name }}</a>
                <ul class="tap_details">
                    <li>{{ onTap.style }}</li>
                    <li>｜</li>
                    <li>{{ onTap.abv }}%</li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            onTaps: [
                {
                    name: "hoptimum",
                    style: "Imperial IPA",
                    abv: 10.6,
                },
                {
                    name: "hoptimum",
                    style: "Imperial IPA",
                    abv: 10.6,
                },
            ],
        };
    },
};
</script>

<style scoped lang="scss">
.home_taps {
    background-color: #22201f;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
}
h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 60px;
    font-weight: 100;
    text-align: left;
    margin: 20px 10px;
}

.tap_wrap {
    display: flex;

    .li {
        list-style: none;
        a {
            color: #ffffff;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 32px;
            font-weight: 700;
        }

        .tap_details {
            display: flex;
            align-items: center;
            font-size: 18px;
            font-weight: 100;
        }
    }
}
</style>
