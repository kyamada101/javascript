function getTriangle(base = 1,height = 1){
    return base * height / 2;
}

console.log(getTriangle(5));

function multi(a,b = a){
    return a * b;
}

console.log(multi(10,5));
console.log(multi(3));

//必須の引数を渡してほしいときには以下のようなコードを書く
function required(){
    throw new Error('引数が不足しています');
}

//valueのデフォルト値としてrequiredを渡して置き、なにもvalueに代入されなかった場合にはエラーを吐くようにしておく
function hoge(value = required()){
    return value;
}
hoge();