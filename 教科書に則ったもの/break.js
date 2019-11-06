var result = 0;
for (var i = 1;i <= 100; i++){
    result += i;
    if (result > 1000){
        break;
    }
}
console.log(`合計が1000を超えるのは${i}のときで、合計値は${result}`);

kuku:
for(var i = 1; i < 10; i++){
    for (var j = 1; j < 10; j++){
        var k = i*j;
        if (k > 20){break kuku;}
        console.log(k);
    }
}