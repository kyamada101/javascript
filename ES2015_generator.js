function* myGenerator(){
    yield 'あいうえお';
    yield 'かきくけこ';
    yield 'さしすせそ';
}

for (let t of myGenerator()){
    console.log(t);
}

//素数を求めるgenerator
function* genPrimes(){
    let num = 2;
    //2から順に素数判定し、素数の場合にだけyield
    while(true){
        if (isPrime(num)) {yield num;}
        num++;
    }
}

function isPrime(value){
    let prime = true;

    for (let i = 2; i <= Math.floor(Math.sqrt(value)); i++){
        if(value % i === 0){
            prime = false; //割り切れたら素数ではない
            break;
        }
    }
    return prime;
}

for (let value of genPrimes()){
    //素数が100より大きくなったら終了
    if (value > 100) {break;}
    console.log(value);
}