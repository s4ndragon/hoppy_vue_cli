<template>
    <div>{{ beerId }}</div>
</template>

<script>
export default {
    inject: ["onTap"],
    props: ["beerId"],
};
</script>

<style scoped></style>
