<template>
    <div class="brand">
        <button-cta>
            <slot name="header"></slot>
        </button-cta>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@use "../SCSS/Abstract/" as a;

.brand {
    min-width: 30%;
    height: 250px;
   // margin: 0px 10px;
    position: relative;
    cursor: pointer;

    //: grayscale(100%);
    @include a.breakpoint(small) {
        min-width: 100%;
    }
}

.brand:hover {
    filter: grayscale(0%);
}

button {
    color: #000;
    z-index: 50;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 700;
    font-size: 20px;
    border: 2px solid #000;
    background-color: #fff;
}
</style>

