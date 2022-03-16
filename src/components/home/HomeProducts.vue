<template>
    <section class="home_products">
        <div class="slide_left">
            <div class="slide_pic">
                <img src="../../assets/home/products/columbus-ipa-can.png" />
            </div>
            <div class="slide_pic">
                <img src="../../assets/home/products/columbus-creeper-can.png" />
            </div>
            <div class="slide_pic">
                <img src="../../assets/home/products/palmetto-mango-ipa.png" />
            </div>
            <a class="prev" @click="plusSlides(-1)">&#10094;</a>
            <a class="next" @click="plusSlides(1)">&#10095;</a>
        </div>
        <div class="slide_right">
            <div class="slide_text">
                <p>Pale orange, with grapefruit, pine, and tropical fruit aromas</p>
                <p>
                    India Pale Ales were originally brewed to withstand long ocean voyages by increasing the quantity of
                    hops and malt used in their Pale Ale predecessors. Our take on IPA pours pale orange with a balanced
                    malt presence and finishes with a combination of grapefruit, pine, and tropical fruit notes from
                    Pacific Northwest grown hops.
                </p>
            </div>
            <div class="slide_text">
                <p>You've been warned</p>
                <p>
                    Pale malts provide a stage for the huge hop presence. Creeper is our limited release Imperial IPA
                    featuring an ever evolving blend of American hops.
                </p>
            </div>
            <div class="slide_text">
                <p>Juicy. Tropical. Hoppy.</p>
                <p>
                    Cascade, Centennial, and Amarillo hops contribute aromas of bright citrus and subtle melon to this
                    American IPA. The addition of mango, a particularly juicy stone fruit, further accentuates the
                    tropical character of the featured hops and balances the hop bitterness with a pleasant, fruity
                    sweetness for your all-day drinking enjoyment. Set sail. Get tropical. Drink up.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            slideIndex: 1,
        };
    },

    methods: {
        showSlides(n) {
            let i;
            let slides_pic = document.getElementsByClassName("slide_pic");
            let slide_text = document.getElementsByClassName("slide_text");
            // var dots = document.getElementsByClassName("dot");
            if (n > slides_pic.length) {
                this.slideIndex = 1;
            }
            if (n < 1) {
                this.slideIndex = slides_pic.length;
            }
            for (i = 0; i < slides_pic.length; i++) {
                slides_pic[i].style.display = "none";
                slides_pic[i].style.opacity = "0";
                slide_text[i].style.display = "none";
                slide_text[i].style.opacity = "0";
            }
            // for (i = 0; i < dots.length; i++) {
            //     dots[i].className = dots[i].className.replace(" active", "");
            // }
            slides_pic[this.slideIndex - 1].style.display = "block";
            slide_text[this.slideIndex - 1].style.display = "block";
            setTimeout(() => {
                slides_pic[this.slideIndex - 1].style.opacity = "1";
                slide_text[this.slideIndex - 1].style.opacity = "1";
            }, 300);
            // dots[slideIndex - 1].className += " active";
        },
        plusSlides(n) {
            this.showSlides((this.slideIndex += n));
        },
    },
    mounted() {
        this.showSlides(this.slideIndex);
    },
};
</script>

<style scoped lang="scss">
section {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 95%;
    margin: auto;
    .slide_left {
        width: 50%;
        position: relative;
        .slide_pic {
            display: none;
            opacity: 0;
            transition: all 0.5s linear;
            img {
                height: 80vh;
            }
        }
        /* Next & previous buttons */
    .prev,
    .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: #77b329;
        font-weight: bold;
        font-size: 30px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
    }
    /* Position the "next button" to the right */
    .prev {
        left: 0;
        border-radius: 3px 0 0 3px;
    }
    .next {
        right: 0;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover,
    .next:hover {
        background-color: #77b329;
        color: #ffffff;
    }
    }
    .slide_right {
        width: 50%;
        position: relative;
        .slide_text {
            background-color: #77b329;
            padding: 10px 15px;
        }
    }
    
}
</style>
