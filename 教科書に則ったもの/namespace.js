//クラス名をライブラリ同士、ライブラリとライブラリを利用しているアプリの間で競合させないために名前空間を定義する
//しかし、JavaやC#と違い、javascriptは標準で名前空間のパッケージがないので、疑似的に定義する

var Wings = Wings || {}; //Wingsが未定義の場合だけ新たな名前空間を作成する

//静的プロパティを追加するのと同じ要領で置きたいクラスを定義する
Wings.Member = function(firstName, lastName){
     this.firstName = firstName;
     this.lastName = lastName;
};

Wings.Member.prototype = {
    getName : function(){
        return this.lastName + ' ' + this.firstName;
    }
};

var mem = new Wings.Member('忠弘' , '山田');
console.log(mem.getName());



//アプリが大規模になってくると、名前空間にも階層を持たせたくなるので、名前空間作成のための関数を準備しておくと便利
function namespace(ns){
    //名前空間を「.」区切りで分割
    var names = ns.split('.');
    var parent = globalThis; //最上位の名前空間はGlobalオブジェクト。ブラウザー環境ではwindow

    //名前空間を上位から順に登録
    for (var i = 0,len = names.length; i < len; i++){
        parent[names[i]] = parent[names[i]] || {};
        parent = parent[names[i]]; //parentの下に順に配置していく
    }
    return parent; //最終的に返すのは階層化した名前空間
}

var my = namespace('Wings.Gihyo.Js.MyApp'); //'Wings.Gihyo.Js.MyApp'の別名がmyになる
my.Person = function(){};
var p = new my.Person(); //こうしておけば、my.Personと表現可能
console.log(p instanceof Wings.Gihyo.Js.MyApp.Person); //trueになる（my.PersonクラスはWings.Gihyo.Js.MyApp.Personと同じということ）