<template>
    <footer>
        <div class="footer_openhour_container footer_block">
            <div class="openhour_title">
                <h6>OPEN HOUR</h6>
            </div>
            <div class="openhour">
                <ul class="openhour_date">
                    <li class="date" id="sun">Sunday</li>
                    <li class="date" id="mon">Monday</li>
                    <li class="date" id="tue">Tuesday</li>
                    <li class="date" id="wed">Wednesday</li>
                    <li class="date" id="thu">Thursday</li>
                    <li class="date" id="fri">Friday</li>
                    <li class="date" id="sat">Saturday</li>
                </ul>
                <ul class="openhour_time">
                    <li class="time" id="sun_time">12:00 - 22:00</li>
                    <li class="time" id="mon_time">14:00 - 22:00</li>
                    <li class="time" id="tue_time">14:00 - 22:00</li>
                    <li class="time" id="wed_time">14:00 - 22:00</li>
                    <li class="time" id="thu_time">14:00 - 22:00</li>
                    <li class="time" id="fri_time">14:00 - 22:00</li>
                    <li class="time" id="sat_time">12:00 - 22:00</li>
                </ul>
            </div>
        </div>
        <div class="footer_middle footer_block">
            <div class="footer_slogan_container">
                <h4>DONT WORRY<br />BE HOPPY</h4>
            </div>
            <div class="footer_media_container">
                <div class="fb_icon">
                    <a class="fb_link" href="https://facebook.com" target="_blank">
                        <i class="fab fa-facebook-f fa-2x" style="color: white"></i>
                    </a>
                </div>
                <div class="twi_icon">
                    <a class="twi_link" href="https://twitter.com" target="_blank">
                        <i class="fab fa-twitter fa-2x" style="color: white"></i>
                    </a>
                </div>
                <div class="ig_icon">
                    <a class="ig_link" href="https://www.instagram.com/" target="_blank">
                        <i class="fab fa-instagram fa-2x" style="color: white"></i>
                    </a>
                </div>
                <div class="yt_icon">
                    <a class="yt_link" href="https://youtube.com/" target="_blank">
                        <i class="fab fa-youtube fa-2x" style="color: white"></i>
                    </a>
                </div>
                <div class="pin_icon">
                    <a class="pin_link" href="https://www.pinterest.com/" target="_blank">
                        <i class="fab fa-pinterest-p fa-2x" style="color: white"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer_bac_container footer_block">
            <div class="footer_bac_pic">
                <img src="../../assets/footer/bac_transparent.png" />
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            today: "",
        };
    },
    methods: {
        openHour() {
            const today = new Date().getDay();
            switch (today) {
                case 0:
                    this.today = "sun";
                    break;
                case 1:
                    this.today = "mon";
                    break;
                case 2:
                    this.today = "tue";
                    break;
                case 3:
                    this.today = "wed";
                    break;
                case 4:
                    this.today = "thu";
                    break;
                case 5:
                    this.today = "fri";
                    break;
                case 6:
                    this.today = "sat";
                    break;
            }
            const choosenOpenDate = document.getElementById(`${this.today}`);
            const choosenOpenHours = document.getElementById(`${this.today}_time`);
            choosenOpenDate.innerHTML = 'TODAY'
            choosenOpenDate.classList.add('today')
            choosenOpenHours.classList.add('today')
        },
    },
    mounted() {
        this.openHour();
    },
};
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}
footer {
    /* border: 1px solid blue; */
    background-color: #22201f;
    width: 100%;
    position: relative;
    top: 250px;
    z-index: 1;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .footer_block {
        padding: 20px 0;
    }
    .footer_openhour_container {
        /* border: 1px solid greenyellow; */
        display: flex;
        flex-direction: column;
        width: 30%;
        .openhour_title {
            /* border: 1px solid turquoise; */
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            text-align: center;
            h6 {
                /* border: 1px solid white; */
                font-family: "Baloo Tamma 2", cursive;
                font-weight: 900;
                font-size: 48px;
                color: #ffffff;
                margin: 0;
                padding: 0;
            }
        }

        .openhour {
            /* border: 1px solid pink; */
            font-family: "Montserrat", sans-serif;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            ul {
                // padding: 0 10px;
                li {
                    list-style: none;
                padding: 0 10px;

                }
            }
        }
        .today {
            background-color: #60a41d;
        }
    }
    .footer_middle {
        /* border: 1px solid orangered; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 33%;

        .footer_slogan_container {
            /* border: 1px solid rgb(30, 27, 212); */
            width: 100%;
            height: 60%;
            justify-content: center;
            align-items: center;
            text-align: center;
            display: flex;
            h4 {
                /* border: 1px solid white; */
                font-family: "Baloo Tamma 2", cursive;
                font-weight: 900;
                color: #ffffff;
                font-size: 48px;
                line-height: 50px;
                margin: 0;
                padding: 0;
            }
        }
        .footer_media_container {
            /* border: 1px solid greenyellow; */
            display: flex;
            justify-content: space-evenly;
            width: 100%;
            height: 50%;
            height: auto;
            div {
                a {
                    i {
                        &:hover {
                            color: #60a41d !important;
                        }
                    }
                }
            }
        }
    }
    .footer_bac_container {
        /* border: 1px solid paleturquoise; */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25%;
        .footer_bac_pic {
            /* border: 1px solid green; */
            img {
                /* border: 1px solid paleturquoise; */
                width: auto;
                height: 300px;
            }
        }
    }
}

@media screen and (max-width: 992px) {
    footer {
        flex-direction: column;
        .footer_block {
            width: 80%;
        }
        .footer_middle {
            .footer_media_container {
                width: 400px;
                margin: auto;
            }
        }
        .footer_bac_container {
            .footer_bac_pic {
                img {
                    height: 250px;
                }
            }
        }
    }
}

@media screen and (max-width: 576px) {
    footer {
        .footer_middle {
            .footer_media_container {
                width: 100%;
            }
        }
    }
}
</style>
