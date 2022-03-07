<template>
    <footer>
        <div class="footer_openhour_container">
            <div class="openhour_title">
                <h6>OPEN HOUR</h6>
            </div>
            <div class="openhour">
                <div class="openhour_date">
                    <div class="date" id="mon">Monday</div>
                    <div class="date" id="tue">Tuesday</div>
                    <div class="date" id="wed">Wednesday</div>
                    <div class="date" id="thu">Thursday</div>
                    <div class="date" id="fri">Friday</div>
                    <div class="date" id="sat">Saturday</div>
                    <div class="date" id="sun">Sunday</div>
                </div>
                <div class="openhour_time">
                    <div class="time" id="mon_time">14:00 - 22:00</div>
                    <div class="time" id="tue_time">14:00 - 22:00</div>
                    <div class="time" id="wed_time">14:00 - 22:00</div>
                    <div class="time" id="thu_time">14:00 - 22:00</div>
                    <div class="time" id="fri_time">14:00 - 22:00</div>
                    <div class="time" id="sat_time">12:00 - 22:00</div>
                    <div class="time" id="sun_time">12:00 - 22:00</div>
                </div>
            </div>
        </div>
        <div class="footer_middle">
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
        <div class="footer_bac_container">
            <div class="footer_bac_pic">
                <img src="../../assets/footer/bac_transparent.png" />
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
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
        width: 30%;
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
</style>
