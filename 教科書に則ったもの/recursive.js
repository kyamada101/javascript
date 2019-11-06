//再帰関数の例
function factorial(n){
    if (n != 0){
        return n * factorial(n-1);
    }
    return 1; //n=0になったら1を返す
}

console.log(factorial(5));