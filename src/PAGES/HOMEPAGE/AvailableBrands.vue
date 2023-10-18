<template>
    <section class="brands" id="brands">
        <div class="brands__container" id="brands__container">
            <h2>pick from our varierty selections</h2>
            <p>we are always adding new collections every month</p>


            <Splide
                :options="{ rewind: false, arrows: true, pagination: false, gap: '0.5rem', perPage: 3, perMove: 1, breakpoints }"
                aria-label="the available brands">
                <SplideSlide>
                    <theBrands>
                        <template #header>
                            nike
                        </template>
                        <img src="../../assets/IMAGES/nike.jpg" alt="" style="width:100%; height: 100%; object-fit: cover;">
                    </theBrands>
                </SplideSlide>

                <SplideSlide>
                    <theBrands>
                        <template #header>
                            adidas
                        </template>
                        <img src="../../assets/IMAGES/adidas.jpg" alt=""
                            style="width:100%; height: 100%; object-fit: cover;">
                    </theBrands>
                </SplideSlide>

                <SplideSlide>
                    <theBrands>
                        <template #header>
                            puma
                        </template>
                        <img src="../../assets/IMAGES/puma1.jpg" alt="" style="width:100%; height: 100%; object-fit: cover;">
                    </theBrands>
                </SplideSlide>

                <SplideSlide>
                    <theBrands>
                        <template #header>
                            vans
                        </template>
                        <img src="../../assets/IMAGES/vans2.jpg" alt=""
                            style="width:100%; height: 100%; object-fit: cover;">
                    </theBrands>
                </SplideSlide>

                <SplideSlide>
                    <theBrands>
                        <template #header>
                            new balance
                        </template>
                        <img src="../../assets/IMAGES/newbalance.jpg" alt=""
                            style="width:100%; height: 100%; object-fit: cover;">
                    </theBrands>
                </SplideSlide>

                <SplideSlide>
                    <theBrands>
                        <template #header>
                            reebok
                        </template>
                        <img src="../../assets/IMAGES/reebok.jpg" alt=""
                            style="width:100%; height: 100%; object-fit: cover;">
                    </theBrands>
                </SplideSlide>

                <SplideSlide>
                    <theBrands>
                        <template #header>
                            lacoste
                        </template>
                        <img src="../../assets/IMAGES/lacoste.jpg" alt=""
                            style="width:100%; height: 100%; object-fit: cover;">
                    </theBrands>
                </SplideSlide>
            </Splide>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../SCSS/Abstract/" as a;

.brands {
    padding: 30px;

    &__container {
        h2 {
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 10px;
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            breakpoints: {
                640: {
                    perPage: 1,
                },
            }
        };
    },
}
</script>