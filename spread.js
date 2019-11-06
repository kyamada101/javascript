console.log(Math.max(13,-4,6,7));
console.log(Math.max(...[13,-4,6,7]));

//分割代入を使えば関数を見やすくできる
function getTriangle({base = 1,height = 1}){
    return base * height / 2;
}

console.log(getTriangle({base:5,height:4}));