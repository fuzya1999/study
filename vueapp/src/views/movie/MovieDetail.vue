<template>
    <div>
        <h1>{{getMovie.title}}</h1>
        <p>{{getMovie.summary}}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            getMovie:{},  
        }
    },
    created() {
        let url = `https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}?apikey=0b2bdeda43b5688921839c8ecb20399b`
        axios.get(url).then(res=>{
            console.log(res.data);
            this.getMovie = res.data;
        })
    },
}
</script>

<style lang="scss" scoped>
    
</style>