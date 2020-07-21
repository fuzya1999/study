<template>
    <div>
        <div class="play">
            <div class="play-mask" :style="{background:'url('+getImg+') no-repeat center/cover'}"></div>
            <div class="play-left">
                <img :src="getImg" class="play-left-img">
            </div>
            <div class="play-right">
                <div class="play-right-song">{{getSong}}</div>
                <div class="play-right-singer">{{getSinger}}</div>
                <div class="play-right-font">
                    <i class="iconfont">&#xe607;</i>
                    <i v-show="!on" @click="start" class="off iconfont">&#xe60c;</i>
                    <i v-show="on" @click="start" class="on iconfont">&#xe606;</i>
                   <i class="iconfont"> &#xe616;</i>
                </div>
                <div class="play-right-list">歌单</div>
            </div>
        </div>
        <ul class="list">
            <li @click="clickList(music,index)" v-for="(music,index) in musicList" :key="music.id" class="list-info" >
                {{music.title}}&nbsp - &nbsp{{music.artist_name}}
            </li>
        </ul>
        <audio :src="musicOn" class="play-audio" autoplay="autoplay" controls=true></audio>
    </div>
</template>

<script>
import '@/assets/css/font.css';
export default {
    data() {
        return {
            getImg:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1083181976,4082214808&fm=26&gp=0.jpg',
            getSong:'还没有选择歌曲哦',
            getSinger:'还没有选择歌手哦',
            on:false,
            getSongId:'',
        }
    },
    props:['musicList','musicOn'],
    methods: {
        clickList(music,index){
            this.getImg=music.pic_premium;
            this.getSong = music.title;
            this.getSinger = music.artist_name;
            this.getSongId = music.song_id;
            this.$emit('songId', this.getSongId);
        },
        start(){
            this.on = !this.on;
        }
    },
}
</script>

<style lang="scss" scoped>
    .list{
        position:fixed;
        bottom:2rem;
        width:100%;
        height:4rem;
        overflow-y:scroll;
        &-info{
            height:0.7rem;
            line-height:0.7rem;
            background:#464444;
            border-bottom:.006667rem solid #ccc;
            padding:0.2rem;
            overflow:hidden;
            color:#cecccc;
        }
    }
    .play{
        color:#fff;
        display:flex;
        padding-left:.133333rem;
        position:relative;
        &-mask{
            position:absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            z-index:-1;
            filter:blur(.133333rem);

        }
        &-left{
            flex:1;
            width:0;
            &-img{
                width:100%;
            }
        }
        &-right{
            flex:2;
            width:0;
            &-song{
                text-align:center;
                font-size:.38rem;
                height:0.8rem;
                line-height:0.8rem;
                overflow:hidden;
            }
            &-singer{
                text-align:center;
                font-size:.266667rem;
                height:.2rem;
              line-height: 0.2rem;
            }
            &-font{
                float:left;
                margin-left:.666667rem;
                margin-top:.2rem;
                height:0.5rem;

              & i{
                height:0.5rem;
                vertical-align: middle;
                font-size: 0.4rem;
              }
            }
            &-list{
                float:right;
                margin-right:.666667rem;
                margin-top:0.2rem;
            }
        }
        &-audio{
            position:fixed;
            bottom:1rem;
            width:100%;
            height:1rem;
            border-radius:0!important;
        }
    }
    .off, .on{
        font-size:0.5rem!important;
        margin-left:0.1rem;
    }
</style>
