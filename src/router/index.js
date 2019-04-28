import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import House from '@/components/House'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: House
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail
        }
    ]
})