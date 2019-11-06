let data_ary = ['one','two','three'];
let data_str = 'あいうえお';
let data_map = new Map([['Mon','月曜'],['Tue','火曜'],['Wed','水曜']]);

//オブジェクトの内容を列挙するための仕組みを備えたオブジェクトがイテレーター
//array,string,map,setなどの組み込みオブジェクトはデフォルトでイテレーターを備えている
for (let d of data_ary){
    console.log(d);
}

for (let d of data_str){
    console.log(d);
}

for (let [key,value] of data_map){
    console.log(`${key}:${value}`);
}

//イテレーターを使用していることをより明示的に表現すると以下のようになる
let itr = data_ary[Symbol.iterator]();
let d;
while (d = itr.next()){
    if (d.done) {break;}
    console.log(d.done);
    console.log(d.value);
}