//関数の戻り値は複数個にできないので、一度配列にする必要がある
function getMaxMin(...nums){
    return [Math.max(...nums), Math.min(...nums)];
}

let result = getMaxMin(10,35,-5,78,0);
console.log(result);