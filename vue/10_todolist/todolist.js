new Vue ({
    el:'#app',
    data:{

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


        },],
        a:[],
        nam:'请输入关键字',
        productName:'请输入产品名称',
        productPrice: '请输入价格',

    },
    methods: {
        b(product){
            product.isRed = !product.isRed;
        },
        d(){
            this.productList = this.productList.filter((ele,index)=>{
                if(!this.a.includes(index)){
                    return ele;
                }
            });
            this.a = [];
        },
        del(index) {
            this.productList.splice(index,1);
        },
        add(){
            this.productList.push({
                productName:this.productName,
                productPrice:this.productPrice,
                isRed:false,
                checked:false,
            });
            this.productName = '请输入产品名称';
            this.productPrice = '请输入价格';
            
        },
        find(nam){
            this.productList = this.productList.filter((ele,index)=>{
                if(ele.productName.includes(this.nam)){
                    return ele;
                }
            })
            this.nam = '请输入关键字';
            

        }
    },
    computed: {         //只要关联的属性有变化，就自动重新计算一次
        total(){
            let sum = 0;
            for(i of this.productList){
                if(i.isRed){
                    sum += i.productPrice;
                }
            };
            return sum;
        }
    },
})
