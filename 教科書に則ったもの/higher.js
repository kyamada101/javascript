//高階関数（関数のなかで関数を呼び出す）
function arrayWalk(data,f){
    for (var key in data){
        f(data[key],key);
    }
}

function showElement(value,key){
    console.log(key + ':' + value);
}

var result = 0;
function sumElement(value,key){
    result += value;
}

var ary = [1,2,4,8,16];
arrayWalk(ary, showElement);
arrayWalk(ary, sumElement);
console.log(`合計値は${result}`);

//上と同じものを匿名関数を用いてかく
//呼び出す関数がその場でしか使わないものであれば、こっちで書くことも多い
arrayWalk(ary,
    function (value,key){
        console.log(key + ':' + value);
    }
);
