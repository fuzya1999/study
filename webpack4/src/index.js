import './css/index.css';
// import sass from './style/index.scss';
// import $ from 'jquery';
import author from '../author.json';

let oDiv1 = document.querySelector('#div1');
oDiv1.innerHTML = 'Hellow World123';


let sum = (x,y) => x + y;
console.log(author);

$('#div4').html(`作者是:${author.name},公司是:${author.company}`);
