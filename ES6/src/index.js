//src 是ES6文件，相当于开发环境
//dist 是ES5文件，相当于生产环境
let a = 5;
let sum = (x,y)=>x+y;
let b = 6;
let c = 4;
let d = 8;


class People{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);

    }
}

let p1 = new People('zs',20);
console.log(p1);
p1.showName();

class Coder extends People{
    constructor(name,age,company){
        super(name,age);         //super:继承父类
        this.company = company;
    }
    showCompany(){
        console.log(this.company);

    }
    static foo(){
        console.log('我是静态方法');

    }
}
let c1 = new Coder('myy',21,'哇唧唧哇');
console.log(c1);
c1.showName();
c1.showCompany();
Coder.foo();       //静态方法