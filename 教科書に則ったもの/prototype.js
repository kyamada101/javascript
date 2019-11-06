var Member = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

//元のMemberクラスの中にprototypeとしてgetNameを作成、Memberのインスタンスを作成してgetNameを呼び出すときは元のここを参照する
//こうすることでメモリの使用量を削減できる、プロトタイプへの変更がリアルタイムでインスタンスにも反映される
Member.prototype.getName = function(){
    return this.lastName + ' ' + this.firstName;
};

var mem = new Member('忠弘','山田');
console.log(mem.getName());

//では、プロトタイプでプロパティを設定するとどうなるのか
var Member2 = function(){};

Member.prototype.sex = '男';
var mem1 = new Member();
var mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex);
mem2.sex = '女'; //ここでプロパティを定義すると、元の暗黙の参照（プロトタイプ）ではなく、ここ（mem2のプロパティ）を参照して、「女」を出力
console.log(mem1.sex + '|' + mem2.sex);

//普通は、プロパティをコンストラクター、メソッド（関数）をプロトタイプで宣言する