'use strict';
var x = 1;
var y = 0;
try{
    if (y === 0){throw new Error('0で除算しようとしました');}
    var z = x / y;
}catch(e){
    console.log(e.message);
}finally{
    console.log('処理は正常に終了しました');
}