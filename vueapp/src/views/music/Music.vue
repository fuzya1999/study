<template>
    <player :musicList="musicList" @songId="getMsgFormSon" :musicOn="musicOn"></player>
</template>

<script>
import player from '@/components/Player.vue';
import axios from 'axios';
export default {
    data() {
        return {
            musicList:{},
            musicOn:'',
        }
    },
    methods: {
        getMsgFormSon(data){
            this.getSongId = data;
            console.log(this.getSongId);
            let a = 'https://bird.ioliu.cn/v1?url=http://tingapi.ting.baidu.com/v1/restserver/ting?format=jsoncalback=&from=webapp_music&method=baidu.ting.song.play&songid='+ this.getSongId;
            console.log(a);
            axios.get(a).then(res=>{
            console.log(res);
            this.musicOn = res.data.bitrate.file_link;
            console.log(this.musicOn);

            
            });
        }

    },
    created() {
        this.$emit('swichTab','music');
        let url1='https://bird.ioliu.cn/v1?url=http://tingapi.ting.baidu.com/v1/restserver/ting?format=jsoncalback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=10&offset=0';
        axios.get(url1).then(res=>{
            // console.log(res.data.song_list);
            this.musicList = res.data.song_list;
        });
    },
    components: {
        player,
    },
}
</script>

<style lang="scss" scoped>
    
</style>