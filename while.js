var x = 8;
while(x<10){
    console.log(`xの値は${x}`);
    x += 1;
}

var x = 10;
do{
    console.log(`xの値は${x}`);
    x += 1;
}while(x<10);

for (var i = 1 ,j = 1; i < 3;i++,j++){
    console.log(`i*jの値は${i*j}`);
}

var data = {apple:150,orange:100,banana:120};
for (var key in data){
    console.log(`${key}の値段は${data[key]}円です`);
}

//オブジェクトならfor inを使ってもよいが、配列の場合は好ましくないのでfor文を使う

var data2 = ['apple','banana','orange'];
for (var i = 0;i < data2.length;i++){
    console.log(data2[i]);
}

//しかし、ES2015から追加されたfor ofならうまくいく
for (var value of data2){
    console.log(value);
}