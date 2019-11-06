//仮引数の前に(...)をつけることで、可変長引数になる
function  sum(...nums){
    let result = 0;
    console.log(nums);
    for (let num in nums){
        console.log(typeof num);
        n = Number(num);
        if (typeof n !== 'number'){
            throw new Error('指定値が数値ではありません：'+n);
        }
        result += n;
    }
    return result;
}

try {
    console.log(sum(1,3,4,5,6,7,8));
}catch(e){
    console.log(e.message);
}