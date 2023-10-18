<template>
    <section class="cta__section">
        <div class="cta__container">
            <h2>be the first to get access to our new shoes</h2>
            <button-cta>sign up now</button-cta>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../SCSS/Abstract/" as a;
.cta__section{
    background-color: #90EE90;
    padding: 45px 0px;
    text-align: center;
    @include a.flex(center, center);
    h2{
        margin-bottom: 20px;
    }
    button{
        background-color: transparent;
        border: 2px solid #000;
    }
}
</style>