<template>
    <header>
        <h2>{{ theSeletedTitle }}</h2>
    </header>
</template>

<script>
export default {
    props: ["theSeletedTitle"],
};
</script>

<style scoped>
h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 40px;
    text-align: left;
    margin: 0 0 0 10px;
}
</style>
