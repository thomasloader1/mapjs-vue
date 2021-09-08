import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login'
import User from '@/components/User'
import Map from '@/components/Map'
import firebase from 'firebase'

Vue.use(Router);

const router = new Router({
    routes: [{
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/user',
            name: 'User',
            component: User,
            meta: {
                auth: true
            }
        },
        {
            path: '/map',
            name: 'Map',
            component: Map,
            meta: {
                auth: true
            }
        },
        {
            path: '/map/test',
            name: 'MapTest',
            component: Map,
            meta: {
                auth: true
            }
        }
    ]

})

router.beforeEach((to, from, next) => {
    let usuario = firebase.auth().currentUser;
    let autorizacion = to.matched.some(record => record.meta.auth);

    if (autorizacion && !usuario) {
        next('login');
    } else if (!autorizacion && usuario) {
        next('user');
    } else {
        next();
    }
})

export default router;