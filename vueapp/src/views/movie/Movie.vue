<template>
    <div>
        <ul>
            <li v-for="(movie,index) in movieList" :key="movie.id" class="movie">
                <div class="movie-img">
                    <img :src="movie.images.medium" alt="">
                </div>
                <div class="movie-info">
                    <div class="movie-info-title">{{movie.title}}</div>
                    <div class="movie-info-av">观众评：<span class="movie-info-ave">{{movie.rating.average}}</span></div>
                    <div class="movie-info-sta">主演：<span v-for="item in movie.casts" :key="item.id" class="movie-info-star">{{item.name}}</span></div>
                </div>                
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            movieList:[]
        }
    },
    beforeCreate() {
        let url = 'https://bird.ioliu.cn/v1?url=http://api.douban.com/v2/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b';
        axios.get(url).then(res=>{
            console.log(res.data.subjects);
            this.movieList=res.data.subjects;
        });
    },
    created() {
        this.$emit('swichTab','movie');
    },
}
</script>

<style lang="scss" scoped>
    .movie {
        display: flex;
        height: 2rem;
        width: 100%;
        padding:0.2rem;
        &-img{
            flex: 1;
            width: 0;
            img {
                width:100%;
                height:100%;
            }
        }
        &-info{
            flex: 3;
            width: 0;
        }
    }
    .movie-info{
        width:0;
        padding-left:0.2rem;
        padding-right:0.2rem;
        &-title{
            margin-top:0.1rem;
            color:#333;
            font-weight:700;
            font-size:0.34rem;
        }
        &-av{
            margin-top:0.6rem;
            &e{
            font-weight:700;
            color:#faaf00;
            }
        }
        &-sta{
            margin-top:0.1rem;
            &r{
            color:#666;
            }
        }
    }
</style>