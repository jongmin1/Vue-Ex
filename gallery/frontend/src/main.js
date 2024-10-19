import { createApp } from 'vue'
import App from './App.vue'
import Home from "@/pages/Home"
import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/pages/Login.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
