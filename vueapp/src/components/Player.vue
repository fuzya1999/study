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
                    <i class="iconfont" @click="before()">&#xe607;</i>
                    <i v-show="!on" @click="start" class="off iconfont">&#xe60c;</i>
                    <i v-show="on" @click="start" class="on iconfont">&#xe606;</i>
                    <i class="iconfont" @click = "next()"> &#xe616;</i>
                </div>
                <div class="play-right-list" @click="onlist">歌单</div>
            </div>
        </div>
        <ul class="url" id="eee">
            <li v-for="(url,index) in getUrl3">{{url}}</li>
        </ul>
        <transition name="aslide">
            <ul class="list" v-show="onList">
                <li @click="clickList(index)" v-for="(music,index) in musicList" :key="music.id" class="list-info" >
                    {{music.title}}&nbsp - &nbsp{{music.artist_name}}
                </li>
            </ul>
        </transition>
        <audio :src="musicOn" class="play-audio" autoplay="autoplay" controls=true @play="on=true" @pause="on=false" ref="play"></audio>
    </div>
</template>

<script>
import '@/assets/css/font.css';
import axios from 'axios';
export default {
    data() {
        return {
            getImg:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1083181976,4082214808&fm=26&gp=0.jpg',
            getSong:'还没有选择歌曲哦',
            getSinger:'还没有选择歌手哦',
            on:false,
            getSongId:'',
            onList:false,
            getIndex:'-1',
            getUrl:'',
            getUrl2:'',
            getUrl3:'',
            ddd:'0',
        }
    },
    watch: {
            getIndex(){
                let b = this.musicList[this.getIndex];
                console.log(b);
                this.getImg=b.pic_premium;
                this.getSong = b.title;
                this.getSinger = b.artist_name;
                this.getSongId = b.song_id;
                this.$emit('songId', this.getSongId);
                this.getUrl = b.lrclink;
                console.log(this.getUrl);
                axios.get(this.getUrl).then(res=>{
                    console.log(res.data);
                    this.getUrl2 = res.data;
                    console.log(this.getUrl2);
                    //拥抱春天歌词有问题没有变化，其他的都有变化
                    this.getUrl3 = this.getUrl2.split('\n' || '\b');
                    console.log(this.getUrl3);
                    
                });
                 setInterval(()=>{
                    let ccc = document.getElementById('eee');
                    console.log(16 * parseInt(this.ddd));
                    this.ddd=parseInt(this.ddd) + 1;
                    ccc.scrollTop = 16 * parseInt(this.ddd);
            },3000);        
            },
    },
    props:['musicList','musicOn'],
    methods: {
        clickList(index){
            this.getIndex = index;
            console.log(this.getIndex);
            
        },
        start(){
            this.on = !this.on;
            if(this.on && this.getIndex != -1){
                this.$refs.play.play();
               
            }else{
                this.on = false;
                this.$refs.play.pause();
                clearInterval(eee);
            }; 
        },
        onlist(){
            this.onList = !this.onList;
        },
        before(getIndex){
            if(this.getSong != '还没有选择歌曲哦'){
                this.getIndex--;
                if(this.getIndex==-1){
                    this.getIndex = this.musicList.length-1;
                console.log(this.getIndex);
                }
            }
            
        },
        next(getIndex){
            if(this.getSong != '还没有选择歌曲哦'){
                this.getIndex++;
                if(this.getIndex==this.musicList.length){
                    this.getIndex = 0;
                console.log(this.getIndex);
                }
            }
        },

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
            background:#ccc;
            border-radius:0!important;
        }
    }
    .off, .on{
        font-size:0.5rem!important;
        margin-left:0.1rem;
    }
    .aslide{
        &-enter{
            transform: translateY(100%);
            &-to{
                transform: translateY(0);
            }
            &-active{
                transition: transform 1s ease;
            }
        }
        &-leave{
            transform: translateY(0);
            &-to{
                transform: translateY(100%);
            }
            &-active{
                transition: transform 1s ease;
            }
        }


    }
    .url{
        position:fixed;
        width:100%;
        height:6.106667rem;
        // color:#36d5c5;
        color:#ccc;
        overflow-y:scroll;
        text-align:center;
    }
</style>
