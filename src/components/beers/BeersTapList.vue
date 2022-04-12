<template>
    <li class="tap_info">
        <!-- <a :href="'/beers/'+onTap.id">{{ onTap.name }}</a> -->
        <!-- <router-link :to="{ path: '/beer/' + onTap.id }">{{ onTap.name }}</router-link> -->
        <router-link :to="thisBeerProductPage">{{ name }}</router-link>
        <ul class="tap_details">
            <li>{{ style }}</li>
            <li>｜</li>
            <li>{{ abv }}%</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: ["id", "name", "abv", "style"],
    computed: {
        thisBeerProductPage() {
            // return "/teams/" + this.id + '?sort=asc';
            return {
                name: "beers-info",
                params: { beerId: this.id },
                // query: { sort: "asc" },
            };
        },
    },
};
</script>

<style scoped lang="scss">
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
</style>
