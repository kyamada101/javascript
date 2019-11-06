//コンストラクターの定義
var Area = function() {};

//静的プロパティの定義
Area.version = '1.0';

//静的メソッドtriangleの定義
Area.triangle = function(base,height){
    return base * height / 2;
};

//静的メソッドdiamondの定義
Area.diamond = function(width,height){
    return width * height / 2;
};

console.log('Areaクラスのバージョン：' + Area.version);
console.log('三角形の面積：' + Area.triangle(5,3));

var a = new Area();
//console.log('ひし形の面積：' + a.diamond(10,2));
//Areaの中にはdiamondが入っているが、Areaが作るインスタンスには静的メンバーは含まれないので、エラーになる。
//a.diamond is not a function

Area.prototype.triangle2 = function(base,height){
    return base * height / 2;
};

Area.prototype.diamond2 = function(width,height){
    return width * height / 2;
};

console.log('ひし形の面積：' + a.diamond2(10,2))
//こちらはプロトタイプで作ったので通る