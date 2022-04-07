<template>
    <section class="home_taps">
        <h3>ON TAP</h3>
        <ul class="tap_wrap">
            <li class="tap_info" v-for="onTap in onTaps" :key="onTap.id">
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
import axios from "axios";

export default {
    data() {
        return {
            onTaps: [
                // {
                //     id: "hoptimum",
                //     name: "hoptimum",
                //     style: "Imperial IPA",
                //     abv: 10.6,
                // },
                // {
                //     id: "hoptimum",
                //     name: "hoptimum",
                //     style: "Imperial IPA",
                //     abv: 10.6,
                // },
            ],
        };
    },
    methods: {
        getTapsInfo() {
            let vm = this;
            axios
                .get("https://hoppy-vue-cli-bfe34-default-rtdb.asia-southeast1.firebasedatabase.app/homeTaps.json")
                .then((response) => (vm.onTaps = response.data));
        },
    },
    created() {
        this.getTapsInfo();
    },
};
</script>

<style scoped lang="scss">
.home_taps {
    background-color: #22201f;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    h3 {
        font-family: "Montserrat", sans-serif;
        font-size: 60px;
        font-weight: 100;
        text-align: left;
        margin: 20px 10px;
    }
    .tap_wrap {
        // width: 95%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-left: 15px;
        margin-right: 15px;
    }
    .tap_info {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        width: calc(95% / 3);
        padding: 10px 0;
        a {
            color: #ffffff;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 32px;
            font-weight: 700;
            text-align: left;
        }
        .tap_details {
            display: flex;
            align-items: center;
            font-size: 18px;
            font-weight: 100;
        }
    }
    ul {
        margin: 0;
        padding-inline-start: 0;

        li {
            list-style: none;
        }
    }
}
</style>
