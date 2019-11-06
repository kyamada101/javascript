function sum(){
    var result = 0;
    for (var i = 0, len = arguments.length; i < len; i++){
        var tmp = arguments[i];
        if (typeof tmp !== 'number'){
            throw new Error('引数が数値ではありません:'+tmp);
        }
        result += tmp;
    }
    return result;
}

try {
    console.log(sum(1,2,3,4,'ほげ'));
}catch(e){
    console.log(e.message);
}

function getTriangle(args){
    if (args.base === undefined) { args.base = 1;}
    if (args.height === undefined) { args.height = 1;}
    return args.base * args.height / 2;
}

console.log(getTriangle({ base:5 , height:4}));
console.log(getTriangle({ base:5 }));
console.log(getTriangle({}));

function getTriangle2(base = 1,height = 1){
    return base * height / 2;
}

console.log(getTriangle2(5,2));