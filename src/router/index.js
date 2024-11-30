import {createRouter, createWebHistory} from "vue-router"
import Body from '../components/body';
import Default from '../pages/dashboard/defaultPage.vue';
/* Authentication */
import LoginOne from '../pages/authentication/login_one';
import LoginTwo from '../pages/authentication/login_two';
import LoginValidate from '../pages/authentication/login_validation.vue';
import LoginTooltip from '../pages/authentication/login_tooltip.vue'
import LoginSweetalert from '../pages/authentication/login_sweetalert.vue'

import RegisterImage from '../pages/authentication/register_image';
import RegisterImage2 from '../pages/authentication/register_image2';
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
        path:'/authentication/login/one',
        name:'LoginOne',
        component:LoginOne,
        meta: {
            title: 'Floating Blood Bank | dfjfn',
          }
      },
      {
        path:'/authentication/login/two',
        name:'LoginTwo',
        component:LoginTwo,
        meta: {
            title: 'LoginTwo | Cuba - Premium Admin Template',
          }
      },
      {
        path:'/authentication/login/validate',
        name:'LoginValidate',
        component:LoginValidate,
        meta: {
            title: 'LoginValidate | Cuba - Premium Admin Template',
          }
      },
      {
        path:'/authentication/login/tooltip',
        name:'LoginTooltip',
        component:LoginTooltip,
        meta: {
            title: 'LoginTooltip | Cuba - Premium Admin Template',
          }
      },
      {
        path:'/authentication/login/sweetalert',
        name:'LoginSweetalert',
        component:LoginSweetalert,
        meta: {
            title: 'LoginTooltip | Cuba - Premium Admin Template',
          }
      },
      {
        path:'/authentication/register/image',
        name:'RegisterImage',
        component:RegisterImage,
        meta: {
            title: 'RegisterImage | Cuba - Premium Admin Template',
          }
      },
      {
        path:'/authentication/register/image2',
        name:'RegisterImage2',
        component:RegisterImage2,
        meta: {
            title: 'RegisterImage2 | Cuba - Premium Admin Template',
          }
      },
      {
        path:'/authentication/unlockuser',
        name:'Unlock',
        component:Unlock,
        meta: {
            title: 'Unlock | Cuba - Premium Admin Template',
          }
      },
      {
        path:'/authentication/forgetpassword',
        name:'ForgetPassword',
        component:ForgetPassword,
        meta: {
            title: 'ForgetPassword | Cuba - Premium Admin Template',
          }
      },
      {
        path:'/authentication/resetpassword',
        name:'ResetPassword',
        component:ResetPassword,
        meta: {
            title: 'ResetPassword | Cuba - Premium Admin Template',
          }
      },
      {
        path:'/authentication/maintenance',
        name:'Maintenance',
        component:Maintenance,
        meta: {
            title: 'ResetPassword | Cuba - Premium Admin Template',
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
            title: ' login | Cuba - Premium Admin Template',
          }
        },
        {
          path: 'register',
          name: 'register 1',
          component: Register,
          meta: {
            title: ' Register | Cuba - Premium Admin Template',
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