var data = 'Global Data';
var obj1 = { data: 'obj1 data'};
var obj2 = { data: 'obj2 data'};

function hoge(){
    console.log(this.data);
}

//関数functionが提供するメンバーcall/apply
hoge.call(null);
hoge.call(obj1);

function hoge2(){
    var args = Array.prototype.slice.call(arguments);
    console.log(args.join('/'));
}

hoge2('Angular','React','Backbone');
//オブジェクトを配列に変換してjoinすることが可能