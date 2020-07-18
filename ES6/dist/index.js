'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//src 是ES6文件，相当于开发环境
//dist 是ES5文件，相当于生产环境
var a = 5;
var sum = function sum(x, y) {
    return x + y;
};
var b = 6;
var c = 4;
var d = 8;

var People = function () {
    function People(name, age) {
        _classCallCheck(this, People);

        this.name = name;
        this.age = age;
    }

    _createClass(People, [{
        key: 'showName',
        value: function showName() {
            console.log(this.name);
        }
    }]);

    return People;
}();

var p1 = new People('zs', 20);
console.log(p1);
p1.showName();

var Coder = function (_People) {
    _inherits(Coder, _People);

    function Coder(name, age, company) {
        _classCallCheck(this, Coder);

        //super:继承父类
        var _this = _possibleConstructorReturn(this, (Coder.__proto__ || Object.getPrototypeOf(Coder)).call(this, name, age));

        _this.company = company;
        return _this;
    }

    _createClass(Coder, [{
        key: 'showCompany',
        value: function showCompany() {
            console.log(this.company);
        }
    }], [{
        key: 'foo',
        value: function foo() {
            console.log('我是静态方法');
        }
    }]);

    return Coder;
}(People);

var c1 = new Coder('myy', 21, '哇唧唧哇');
console.log(c1);
c1.showName();
c1.showCompany();
Coder.foo(); //静态方法