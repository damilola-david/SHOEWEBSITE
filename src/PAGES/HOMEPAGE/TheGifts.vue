<template>
    <section class="gifts">
        <div class="gifts__container">
            <div class="first gifts__wrapper">
                <div class="gifts__text">
                    <h3>gifts for him</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <button-cta>shop now</button-cta>
                </div>
            </div>
            <div class="second gifts__wrapper">
               <div class="gifts__text">
                <h3>gifts for her</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <button-cta>shop now</button-cta>
               </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use "../../SCSS/Abstract/" as a;
.gifts{
    &__container{
        padding: 20px 0px;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(1,500px);

        @include a.breakpoint(small){
            grid-template-columns: repeat(1,1fr);
            grid-template-rows: repeat(2,500px);

        }
    }
    &__text{
        position: absolute;
        bottom: 10%;
        left: 6%;
        color: #fff;
        h3{
            margin-bottom: 20px;
            font-weight: 800;
            font-size: 30px;
        }
        p{
            margin-bottom: 20px;
        }
    }
}
.first{
       background-image: url("../../assets/IMAGES/man3.jpg");
        background-size: cover;
        position: relative;
    }
    .second{
        background-image: url("../../assets/IMAGES/woman2.jpg"); 
        background-size: cover;
        background-position: center;
        position: relative;
    }

    .gifts__wrapper{
        position: relative;
        isolation: isolate;
      overflow: hidden;  
    }
    .gifts__wrapper::before{
        content: "";
        background-color: #00000061;
        position: absolute;
        z-index: -5;
        inset: 0px;
    }
    button{
        background-color: #fff;
    }
</style>