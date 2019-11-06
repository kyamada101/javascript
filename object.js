var x = new Date;
var obj = {x:1,y:2,z:3};
console.log(obj.x);
console.log(obj['x']);
console.log(x);
console.log(0.2 * 10 * 3 === 0.6 * 10);

const data = [1,2,3,5,6,7,8,9];
console.log(data);
data[1] = 10;
console.log(data);
//let [x0,x1,...other] = data;
//let data2 = [x0,x1,...other];
//console.log(`redifined data is ${data2}`);

let book = {title:'Javaポケットリファレンス', publish : '技術評論社', price : 2680, other: {keyword : 'Java SE 8', logo : 'logo.jpg'}};
let {title, other, other:{keyword}} = book;
console.log(title);
console.log(other);
console.log(keyword);

console.log(0 == false);

var num = 80;
console.log((num >= 60) ? '合格' : '不合格');