<template>
    <button
        class="ui-button"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.ui-button {
    min-width: 120px;
    height: 40px;
    font-size: 20px;
    font-family: Awesome;
    background-color: rgb(123, 4, 0);
    color: rgb(246, 255, 255);
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
}
</style>