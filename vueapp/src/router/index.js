import Vue from 'vue';
import VueRouter from 'vue-router';
import Movie from '@/views/movie/Movie.vue';
import Music from '@/views/music/Music.vue';
import Book from '@/views/book/Book.vue';
import Photo from '@/views/photo/Photo.vue';
import MovieDetail from '@/views/movie/MovieDetail.vue';


Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect: '/movie'     //redirect重定向
  },{
    path:'/movie',
    name:'movie',
    component:Movie,
  },{
    path:'/music',
    name:'music',
    component:Music,
  },{
    path:'/book',
    name:'book',
    component:Book,
  },{
    path:'/photo',
    name:'photo',
    component:Photo,
  },{
    path:'/moviedetail/:movieId',
    name:'moviedetail',
    component:MovieDetail,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
