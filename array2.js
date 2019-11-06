var ary = [1,2,3,4,5];
console.log(ary);
console.log(ary.toString());

var data = [2,3,4,5];
data.forEach(function(value,index,array){
    console.log(value * value);
});

var result = data.map(function(value,index,array){
    return value * value;
});
console.log(result);