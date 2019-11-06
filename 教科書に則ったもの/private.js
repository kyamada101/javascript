//クラス内部のメソッドからのみ呼び出すことのできるプライベートメンバーを作成する

function Triangle(){
    //プライベートプロパティの定義
    var _base;
    var _height;

    //プライベートメソッドの定義
    var _checkArgs = function(val){
        return (typeof val === 'number' && val > 0); //引数が数字型で正であるかをチェック
    }
    //ここまでがプライベートメンバー定義。var命令で作成するのがポイント。this.~ではない

    //これ以降の4つの関数が特権メソッド。クラス内のプライベートメンバーにもアクセス可能
    this.setBase = function(base){ //セッターメソッド
        if (_checkArgs(base)) {_base = base;} 
    }
    this.getBase = function() { return _base;} //ゲッターメソッド

    this.setHeight = function(height){
        if (_checkArgs(height)) {_height = height;} 
    }
    this.getHeight = function() { return _height;}
}

//これはプライベートメンバーにアクセスしない普通のメソッド
Triangle.prototype.getArea = function(){
    return this.getBase() * this.getHeight() / 2; //this.~で作成されているので、これらはプライベートメンバーではない
}

var t = new Triangle(); //Triangleオブジェクトでtインスタンスを作成
t._base = 10; //これがプライベートメンバーなので値をいれようとしてもアクセスできない
t._height = 2; //これもプライベートメンバーなので同じ
console.log('三角形の面積：' + t.getArea()); //すると、getAreaを呼んでも、_baseと_heightがNaNなので結果もNaNになる

t.setBase(10); //こちらはプライベートメンバーではないので値を入れることができる
t.setHeight(2); //上に同じ
console.log('三角形の底辺：' + t.getBase());
console.log('三角形の高さ：' + t.getHeight());
console.log('三角形の面積：' + t.getArea()); //さっきと違ってこちらは値が得られる。
