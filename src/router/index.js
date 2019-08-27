import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import signin from '../components/admin/signin.vue'
import signup from '../components/admin/signup.vue'
import sidebar from '../components/sidebar.vue'
import article from '../components/article.vue'
import about from '../components/about.vue'
import articleDetail from '../components/articleDetail.vue'
import articleList from '../components/admin/articleList.vue'
import articleEdit from '../components/admin/articleEdit.vue'

export default new VueRouter({
    routes: [{
            path: '/',
            name: 'sidebar',
            component: sidebar,
        },
        {
            path: '/about',
            name: 'about',
            component: about,
        },
        {
            path: '/article',
            name: 'article',
            component: article,
        },
        {
            path: '/articleDetail/:id',
            name: 'articleDetail',
            component: articleDetail,
        },
        {
            path: '/admin/articleList',
            name: 'articleList',
            component: articleList,
        },
        {
            path: '/admin/articleEdit/:id',
            name: 'articleEdit',
            component: articleEdit,
        },
        {
            path: '/admin/articleEdit',
            name: 'articleEdit',
            component: articleEdit,
        },
        {
            path: '/admin/signin',
            name: 'signin',
            component: signin
        },
        {
            path: '/admin/signup',
            name: 'signup',
            component: signup,
        }
    ]
})