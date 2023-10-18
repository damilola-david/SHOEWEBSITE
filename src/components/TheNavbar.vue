<template>
    <nav class="nav">
        <div class="nav__container">
            <div class="logo__container">
                <font-awesome-icon :icon="['fas', 'shoe-prints']" /> <a href="#"
                    style="font-size: 20px; font-weight: 800;">STEPZ</a>
            </div>
            <div class="list__container">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="" class="">Men</a>
                    </li>

                    <li class="nav__item">
                        <a href="" class="">Women</a>
                    </li>

                    <li class="nav__item">
                        <a href="" class="">kids</a>
                    </li>

                    <li class="nav__item">
                        <a href="" class="">Brands</a>
                    </li>

                    <li class="nav__item">
                        <a href="" class="">collections</a>
                    </li>

                    <li class="nav__item">
                        <a href="" class="">sale</a>
                    </li>
                </ul>
            </div>

            <div class="login__container">
                <div class="" style="display: inline-block; position: relative; margin-right: 20px;">
                    <span
                        style="position: absolute; background-color:#75ec39; width: 20px; height:20px; border-radius: 50%; text-align: center; top: -20px; right: -10px;">2
                    </span>
                    <font-awesome-icon icon="fa-solid fa-bag-shopping" style="font-size: 25px;" />
                </div>
                <a href="" class="">login</a> / <a>signup</a>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use "../SCSS/Abstract/" as a;

.nav {
    background-color: #fff;
    box-shadow: 0.25px 01px 1px #c5c3c3;
    position: fixed;
    width: 100%;
    z-index: 99999999;

    &__container {
        @include a.flex(space-between, center);
        @include a.container(97%);
        padding: 30px;
    }

    &__list {
        @include a.flex(center, center);
        list-style-type: none;
        font-weight: 800;

        @include a.breakpoint(small) {
            display: none;
        }
    }

    &__item {
        margin: 0px 30px;
    }
}</style> 