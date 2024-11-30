import {createRouter, createWebHistory} from "vue-router"
import Body from '../components/body';
import Default from '../pages/dashboard/defaultPage.vue';
/* Authentication */
import LoginOne from '../pages/authentication/login';
import LoginValidate from '../pages/authentication/login_validation.vue';
import LoginTooltip from '../pages/authentication/login_tooltip.vue'
import LoginSweetalert from '../pages/authentication/login_sweetalert.vue'


import RegisterImage2 from '../pages/authentication/register';
import Unlock from '../pages/authentication/unlock';
import ForgetPassword from '../pages/authentication/forget_password';
import ResetPassword from '../pages/authentication/reset_password';
import Maintenance from '../pages/authentication/maintenance.vue'
/* Auth */
import login from '../auth/login';
import Register from '../auth/register';

const routes =[
    {
        path: '/',
        component: Body,
    
        children: [
          {
            path: '',
            name: 'defaultRoot',
            component: Default,
          },
    
        ]
      },
      {
        path:'/authentication/login',
        name:'LoginOne',
        component:LoginOne,
        meta: {
            title: 'Login | Floating Blood Bank',
          }
      },
      {
        path:'/authentication/login/validate',
        name:'LoginValidate',
        component:LoginValidate,
        meta: {
            title: 'LoginValidate | Floating Blood Bank',
          }
      },
      {
        path:'/authentication/login/tooltip',
        name:'LoginTooltip',
        component:LoginTooltip,
        meta: {
            title: 'LoginTooltip | Floating Blood Bank',
          }
      },
      {
        path:'/authentication/login/sweetalert',
        name:'LoginSweetalert',
        component:LoginSweetalert,
        meta: {
            title: 'LoginTooltip | Floating Blood Bank',
          }
      },
      {
        path:'/authentication/register',
        name:'RegisterImage2',
        component:RegisterImage2,
        meta: {
            title: 'RegisterImage2 | Floating Blood Bank',
          }
      },
      {
        path:'/authentication/unlockuser',
        name:'Unlock',
        component:Unlock,
        meta: {
            title: 'Unlock | Floating Blood Bank',
          }
      },
      {
        path:'/authentication/forgetpassword',
        name:'ForgetPassword',
        component:ForgetPassword,
        meta: {
            title: 'ForgetPassword | Floating Blood Bank',
          }
      },
      {
        path:'/authentication/resetpassword',
        name:'ResetPassword',
        component:ResetPassword,
        meta: {
            title: 'ResetPassword | Floating Blood Bank',
          }
      },
      {
        path:'/authentication/maintenance',
        name:'Maintenance',
        component:Maintenance,
        meta: {
            title: 'ResetPassword | Floating Blood Bank',
          }
      },
      {
        path: '/auth',
        children: [
        {
          path: 'login',
          name: 'Login 1',
          component: login,
          meta: {
            title: ' login | Floating Blood Bank',
          }
        },
        {
          path: 'register',
          name: 'register 1',
          component: Register,
          meta: {
            title: ' Register | Floating Blood Bank',
          }
        }
        ]
      }
]
const router=createRouter({
    history: createWebHistory(),
    routes
})
export default router