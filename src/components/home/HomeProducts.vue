<template>
    <section class="home_products">
        <div class="slide_left">
            <div class="slide_pic" v-for="productsInfo in productsInfos" :key="productsInfo.id">
                <img :src="require(`../../assets/home/products/${productsInfo.id}.png`)" />
            </div>
            <a class="prev" @click="minesSlides(-1)">&#10094;</a>
            <a class="next" @click="plusSlides(1)">&#10095;</a>
        </div>
        <div class="slide_right">
            <div class="slide_text" v-for="productsInfo in productsInfos" :key="productsInfo.id">
                <span class="">{{ productsInfo.name }}</span>
                <h4>{{ productsInfo.title }}</h4>
                <p>
                    {{ productsInfo.description }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            slideIndex: 0,
            productsInfos: [],
        };
    },

    methods: {
        showSlidesRight(n) {
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
                slides_pic[i].classList.remove('slide_pic_show_right','slide_pic_show_left');
                slide_text[i].style.display = "none";
                slide_text[i].style.opacity = "0";
            }
            slides_pic[this.slideIndex - 1].classList.add('slide_pic_show_right');
            slide_text[this.slideIndex - 1].style.display = "block";
            setTimeout(() => {
                // slides_pic[this.slideIndex - 1].style.opacity = "1";
                slide_text[this.slideIndex - 1].style.opacity = "1";
            }, 300);
            // dots[slideIndex - 1].className += " active";
        },
        showSlidesLeft(n) {
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
                slides_pic[i].classList.remove('slide_pic_show_left','slide_pic_show_right');
                slide_text[i].style.display = "none";
                slide_text[i].style.opacity = "0";
            }
            slides_pic[this.slideIndex - 1].classList.add('slide_pic_show_left');
            slide_text[this.slideIndex - 1].style.display = "block";
            setTimeout(() => {
                // slides_pic[this.slideIndex - 1].style.opacity = "1";
                slide_text[this.slideIndex - 1].style.opacity = "1";
            }, 300);
            // dots[slideIndex - 1].className += " active";
        },
        plusSlides(n) {
            this.showSlidesRight((this.slideIndex += n));
        },
        minesSlides(n) {
            this.showSlidesLeft((this.slideIndex += n));
        },
        getProductsInfo() {
            let vm = this;
            // fetch("https://hoppy-vue-cli-bfe34-default-rtdb.asia-southeast1.firebasedatabase.app/homeProducts.json")
            //     .then(function (response) {
            //         // 直接轉成JSON格式
            //         return response.json();
            //         // this.productsInfo = response.json();
            //     })
            //     .then(function (j) {
            //         // `j`會是一個JavaScript物件
            //         console.log(j);
            //         vm.productsInfos = j;
            //     })
            //     .catch(function (err) {
            //         // Error :(
            //         console.log(err);
            //     });
            axios
                .get("https://hoppy-vue-cli-bfe34-default-rtdb.asia-southeast1.firebasedatabase.app/homeProducts.json")
                .then((response) => (vm.productsInfos = response.data));
        },
    },
    created() {
        this.getProductsInfo()
    },
    mounted() {
        this.getProductsInfo();
        setTimeout(() => {
            this.plusSlides(1);
        }, 200);
    },
};
</script>

<style scoped lang="scss">
section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    width: 95%;
    margin: auto;
    .slide_left {
        width: 40%;
        position: relative;
        .slide_pic {
            display: none;
            opacity: 0;
            transition: all 0.5s linear;
            overflow: hidden;
            // &:first-child {
            //     display: block;
            //     opacity: 1;
            // }
            img {
                height: 80vh;
                max-height: 450px;
            }
        }
        .slide_pic_show_right {
            display: block;
            opacity: 1;
            img {
            transition: all 0.5s linear;
            animation: slide_pic_show_right 1s forwards;
            }
        }
        .slide_pic_show_left {
            display: block;
            opacity: 1;
            img {
            transition: all 0.5s linear;
            animation: slide_pic_show_left 1s forwards;
            }
        }
        @keyframes slide_pic_show_right {
            0% {
                display: none;
                opacity: 0;
                transform: translateX(50%);
            }
            100% {
                display: block;
                opacity: 1;
                transform: translateX(0%);
            }
        }
        @keyframes slide_pic_show_left {
            0% {
                display: none;
                opacity: 0;
                transform: translateX(-50%);
            }
            100% {
                display: block;
                opacity: 1;
                transform: translateX(0%);
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
        width: 40%;
        position: relative;
        .slide_text {
            // background-color: #77b329;
            border: 1px solid #77b329;
            // background-image: url(../../assets/home/products/slide_text_bg.png);
            padding: 10px 15px;
            display: none;
            color: #d3d3d3;
            // border-radius: 10px;
            box-shadow: #3d3f436e 0px 3px 8px;
            max-height: 400px;
            &:first-child {
                display: block;
            }
            .highlight {
                background: url(../../assets/home/products/brush.png);
                background-repeat: no-repeat;
                background-size: 100% 95%;
                padding: 8px 0;
            }
            span {
                color: #222022;
                font-size: 36px;
                font-weight: 900;
                margin: 0.5em 0 0 -4px;

                box-decoration-break: clone;
                background-image: linear-gradient(
                    90deg,
                    #ffef7e,
                    #b7f9e9
                );
                background-size: 100% 42%;
                background-repeat: no-repeat;
                background-position: 0 85%;
                padding: 0 4px;
                margin-left: -4px;
            }
            p {
                text-align: left;
            }
        }
    }
}
@media screen and (max-width: 992px) {
    section {
        width: 100%;
        // justify-content: space-around;
        .slide_left {
            width: 45%;
        }
    }
}
@media screen and (max-width: 768px) {
    section {
        flex-direction: column;
justify-content: space-around;
        .slide_left {
            .slide_pic {
                img {
                    max-height: 300px;
                }
            }
        }
        .slide_right {
            width: 80%;
        }
    }
}
</style>
