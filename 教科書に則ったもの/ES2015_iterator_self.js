//自分で定義したクラスにイテレーターを定義する
class MyIterator {
    //引数で与えられたdataをプロパティに設定
    constructor (data){
        this.data = data;
    }

    //デフォルトイテレーターを取得するためのメソッドを定義
    [Symbol.iterator](){
        let current = 0;
        let that = this;
        return {
            //dataオブジェクトの次の要素を取得
            next(){
                return current < that.data.length ?
                {value: that.data[current++], done:false} :
                {done: true};
            }
        };
    }
}


//MyIteratorクラスで保持された配列を列挙
let itr = new MyIterator(['one','two','three']);
for (let value of itr){
    console.log(value);
}