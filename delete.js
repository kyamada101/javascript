var ary = ['JavaScript', 'Ajax', 'ASP>NET'];
console.log(delete ary[0]);
console.log(ary);
console.log(typeof ary);

var obj = {x:1, y:2};
console.log(delete obj.x);
console.log(obj.x);
console.log(typeof obj);

var obj2 = {x:obj, y:100};
console.log(obj2);
console.log(delete obj2.x);
console.log(obj2);
console.log(typeof obj2);

var num = 100;
console.log(typeof 100);