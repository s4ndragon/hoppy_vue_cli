import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 

createApp(App).use(router).mount('#app')
