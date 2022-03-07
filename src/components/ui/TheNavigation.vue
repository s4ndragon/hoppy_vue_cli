<template>
    <nav>
        <h1 class="logo">
            <router-link to="/"> <img src="../../assets/nav/logo.png" /></router-link>
        </h1>
        <ul class="nav_links">
            <li @click="hamburgerMenu">
                <router-link to="/beers">BEERS</router-link>
            </li>
            <li @click="hamburgerMenu">
                <router-link to="/taproom">TAPROOM</router-link>
            </li>
            <li @click="hamburgerMenu">
                <router-link to="/brewery">BREWERY</router-link>
            </li>
            <li @click="hamburgerMenu">
                <router-link to="/about">ABOUT</router-link>
            </li>
            <li @click="hamburgerMenu">
                <router-link to="/events">EVENTS</router-link>
            </li>
        </ul>
        <div class="hamburger" @click="hamburgerMenu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        hamburgerMenu() {
            const hamburger = document.querySelector(".hamburger");
            const navLinks = document.querySelector(".nav_links");
            const links = document.querySelectorAll(".nav_links li");
            hamburger.classList.toggle("on");
            navLinks.classList.toggle("open");
            links.forEach((link) => {
                link.classList.toggle("fade");
            });
        },
    },
};
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}
nav {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 70px;
    background: #60a41d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        margin: 0 10px;
        display: flex;
        align-items: center;
        img {
            min-width: 200px;
            max-width: 200px;
        }
    }
    .nav_links {
        display: flex;
        list-style: none;
        width: 65%;
        height: 100%;
        justify-content: space-around;
        align-items: center;
        margin-left: auto;
        padding-top: 5px;
        li a {
            color: #fff;
            text-decoration: none;
            font-size: 32px;
            font-family: "Baloo Tamma 2", cursive;
            font-weight: 700;
        }
    }
    .hamburger {
        width: 30px;
        height: 20px;
        position: relative;
    }
}

@media screen and (max-width: 991px) {
    nav {
        position: relative;
        flex-direction: row;
        align-items: unset;

        .nav_links {
            position: fixed;
            background: #22201f;
            height: 100vh;
            width: 100%;
            flex-direction: column;
            clip-path: circle(50px at 120% -10%);
            -webkit-clip-path: circle(50px at 120% -10%);
            transition: all 1s ease-out;
            pointer-events: none;
            li {
                opacity: 0;
                transition: all 0.5s ease;

                &:nth-child(1) {
                    transition-delay: 0.2s;
                }
                &:nth-child(2) {
                    transition-delay: 0.3s;
                }
                &:nth-child(3) {
                    transition-delay: 0.4s;
                }
                &:nth-child(4) {
                    transition-delay: 0.5s;
                }
                &:nth-child(5) {
                    transition-delay: 0.6s;
                }
                &:nth-child(6) {
                    transition-delay: 0.7s;
                }
                a {
                    font-size: 25px;
                }
            }
        }
        .nav_links.open {
            clip-path: circle(1500px at 90% -10%);
            -webkit-clip-path: circle(1500px at 90% -10%);
            pointer-events: all;
            z-index: 2;
        }
        li.fade {
            opacity: 1;
        }

        .hamburger {
            position: absolute;
            cursor: pointer;
            right: 5%;
            top: 50%;
            transform: translate(-5%, -50%);
            z-index: 3;
            .line {
                position: absolute;
                width: 100%;
                height: 3px;
                background-color: #fff;
                border-radius: 2px;
                transform: rotate(0deg);
                transition: 0.4s ease;
                &:nth-child(1) {
                    top: 0;
                }
                &:nth-child(2),
                &:nth-child(3) {
                    top: 50%;
                }
                &:nth-child(4) {
                    top: 100%;
                }
            }
        }
        .hamburger.on {
            .line {
                &:nth-child(1),
                &:nth-child(4) {
                    top: 50%;
                    width: 0%;
                    left: 50%;
                }
                &:nth-child(2) {
                    transform: rotate(45deg);
                }
                &:nth-child(3) {
                    transform: rotate(-45deg);
                }
            }
        }
    }
}
</style>
