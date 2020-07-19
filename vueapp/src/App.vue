<template>
  <div id="app">
    <CommonHeader :test="test"></CommonHeader>
    <router-view class="content" @swichTab="swichTab"/>
    <CommonFooter :footerBg='test.bgColor' :menuList="menuList"></CommonFooter>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'
export default {
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    swichTab(menuName){
      this.menuList.forEach(menu=>{
        if(menu.name === menuName){
          this.test = menu;
        }
      })
      
    }
  },
  data(){
    return{
      test:{},
      menuList:[
        {
          title:'电影',
          bgColor:'#e54747',
          name:'movie',
          path: '/movie',
        },{
          title:'音乐',
          bgColor:'#009688',
          name:'music',
          path: '/music',
        },{
          title:'书籍',
          bgColor:'#795548',
          name:'book',
          path: '/book',
        },{
          title:'图片',
          bgColor:'#3f51b5',
          name:'photo',
          path: '/photo',
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .content{
    margin: 1rem 0;
  }
</style>
