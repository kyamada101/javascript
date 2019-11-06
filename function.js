function getTriangle(base,height){
    return base * height /2;
}

console.log('三角形の面積：'+getTriangle(5,2));

//特別なことがない限りfunctionコンストラクターは使うべきではない
var getTriangle2 = new Function('base','height','return base * height / 2;');
console.log(`三角形の面積は${getTriangle2(5,2)}`);

//関数リテラルで定義
var getTriangle3 = function(base,height){
    return base * height / 2;
};
console.log(`三角形の面積は${getTriangle3(5,2)}`);

//アロー関数を使って記述した場合
let getTriangle4 = (base,height) => base * height / 2;
console.log(`三角形の面積は${getTriangle4(5,2)}`);