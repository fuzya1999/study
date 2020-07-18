new Vue ({
    el:'#app',
    data:{
        name2:'请输入商品名称',
        name1:'请输入关键字',
        productList:[{
            productName:'衣服',
            productPrice: 123,
            isRed:false,
        },{
            productName:'裤子',
            productPrice: 79,
            isRed:false,

        },{
            productName:'鞋',
            productPrice: 1123,
            isRed:false,

        },{
            productName:'帽子',
            productPrice: 13,
            isRed:false,

        },{
            productName:'书',
            productPrice: 23,
            isRed:false,

        },{
            productName:'笔',
            productPrice: 3,
            isRed:false,

        },]
    },
    methods: {
        b(a){
            a.isRed = !a.isRed;
        }
    },
})
