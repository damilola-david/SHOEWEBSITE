<template>
    <footer class="footer">
        <section class="footer__container">
            <div class="footer__list">
                <h3>explore</h3>
                <a href="" class="">brands</a>
                <a href="" class="">clothing</a>
                <a href="" class="">shoes</a>
                <a href="" class="">new arrivals</a>
                <a href="" class="">accesories</a>
            </div>

            <div class="footer__list">
                <h3>about</h3>
                <a href="" class="">about stepz</a>
                <a href="" class="">our purpose</a>
                <a href="" class="">brands</a>
                <a href="" class="">careers</a>
                <a href="" class="">student discount</a>
            </div>

            <div class="footer__list">
                <h3>support</h3>
                <a href="" class="">help</a>
                <a href="" class="">returns & exchanges</a>
                <a href="" class="">shipping</a>
                <a href="" class="">size charts</a>

            </div>

            <div class="footer__list">
                <h3>resources</h3>
                <a href="" class="">become an influencer</a>
                <a href="" class="">site map</a>
                <a href="" class="">legal & terms</a>
                <a href="">privacy policy</a>
            </div>

            <div class="footer__list about" style="flex-grow: 2;">
                <h1 style="margin-bottom: 20px;">STEPZ</h1>
                <p>stepz is a Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis rerum repellat porro
                    molestiae qui rem!</p>
                <a href="" class=""><font-awesome-icon icon="fa-brands fa-x-twitter" size="2x" /></a>
                <a href="" class=""><font-awesome-icon icon="fa-brands fa-instagram" size="2x" /></a>
                <a href="" class=""><font-awesome-icon icon="fa-brands fa-facebook" size="2x" /></a>
                <a href="" class=""><font-awesome-icon icon="fa-brands fa-pinterest" size="2x" /></a>
                <a href="" class=""><font-awesome-icon icon="fa-brands fa-youtube" size="2x" /></a>
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
@use "../SCSS/Abstract/" as a;

.footer {
    padding: 60px 30px;
    background-color: #000;
    color: #fff;

    &__container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);

        @include a.breakpoint(small) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    &__list {
        h3 {
            margin-bottom: 10px;
        }

        a {
            display: block;
            margin: 25px 0px;
            color: #ffffffdc;
        }
    }
    &__list.about{
        a{
            display: inline-block;
            margin: 20px 5px;
        }
    }
}
</style>