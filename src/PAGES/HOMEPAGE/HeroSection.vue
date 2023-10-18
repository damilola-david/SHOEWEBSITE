<template>
    <section class="hero">
        <div class="hero__container">
            <div class="hero__text">
                <div class="">
                    <h1>
                        things are about to get drippy
                    </h1>
                    <p>
                        the drip season is already before you 
                    </p>
                    <button-cta>shop now</button-cta>
                </div>
            </div>
            <div class="hero__image">
                <img src="../../assets/IMAGES/woman3.jpg" alt="">
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../SCSS/Abstract/" as a;

.hero {
    padding: 0px;
    padding-top: 80px;

    &__container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: minmax(400px,500px);
        background: #fff;

        @include a.breakpoint(small) {
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(2, auto)
        }
    }

    &__text {
        @include a.flex(start, center);
        @include a.container(85%);

        @include a.breakpoint(small) {
            padding: 20px 0px;

        }

        h1 {
            font-size: 3.5rem;
            color: #000;
            margin-bottom: 20px;
            width: 80%;

            @include a.breakpoint(small) {
                font-size: 2.5rem;
                width: 100%;
            }
        }

        p {
            color: #0d0d0df4;
            line-height: 30px;
            margin-bottom: 10px;
        }

        button {
            background: #000000f1;
            color: #fff;
        }
    }

    &__image {
        @include a.breakpoint(small) {
            grid-row: 1/2;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            //transform: scaleX(-1);
        }
    }
}</style>