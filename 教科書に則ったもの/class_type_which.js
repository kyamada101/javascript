var Animal = function(){};
var Hamster = function(){};
Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();
//a.constructor でそのオブジェクトのクラス（元のコンストラクターを取得可能）
console.log(a.constructor === Animal);
console.log(h.constructor === Animal);
console.log(h.constructor === Hamster); //一番元のクラスを返すので、これがfalseになる

//オブジェクトが特定のコンストラクターによって生成されたインスタンスであるかどうかを判定できる
console.log(h instanceof Animal);
console.log(h instanceof Hamster);
