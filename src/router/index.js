import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import james from '@/components/james'
import james2 from '@/components/slider'
import home from '@/components/home'
import header from '@/components/header'
import login from '@/components/login'
import login2 from '@/components/login2'
import App from '@/App.vue'
import footer from '@/components/footer'
import homecctv from '@/components/homecctv'
import news from '@/components/news'
import care from '@/components/care'
import signUp from '@/components/signUp'
import signUp2 from '@/components/signUp2'

Vue.use(Router);

// NavigationDuplicated error catch
['push','replace'].forEach(method => {
  const originalMethod = Router.prototype[method];
  Router.prototype[method] = function m(location) {
    return originalMethod.call(this, location).catch(error => {
      if (error.name !== 'NavigationDuplicated') {
        // capture exception
      }
    })
  };
});

export default new Router({
  mode: 'history',
  routes: [
    {
      //첫 로그인 화면
      path: '/',
      components: {
        header: header,
        // default: login,
        default: login2,
        footer: footer
      }
    },
    {
      //메인 홈 화면
      path: '/home',
      components:{
        header: header,
        default: home,
        footer: footer
      }
    },
    {
      //회원가입 화면
      path: '/SignUp',
      components: {
        header: header,
        default: signUp,
        footer: footer
      }
    },
    {
      //회원가입 화면
      path: '/SignUp2',
      components: {
        header: header,
        default: signUp2,
        footer: footer
      }
    },
    {
      //cctv 화면
      path: '/homecctv',
      components: {
        header: header,
        default: homecctv,
        footer: footer
      }
    },
    {
      //크롤링 된 뉴스 화면
      path: '/news',
      components: {
        header: header,
        default: news,
        footer: footer
      }
    },
    {
      //온습도 등 우리집 케어 화면
      path: '/care',
      name: 'care',
      components: {
        header: header,
        default: care,
        footer: footer
      }
    },
    {
       //제임스 소개 화면
      path: '/james',
      components: {
        header: header,
        default: james,
        footer: footer
      }
    },
    {
       //제임스 소개 화면2
      path: '/james2',
      components: {
        header: header,
        default: james2,
        footer: footer
      }
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
