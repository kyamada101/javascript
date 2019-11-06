var x = 8;
if (x >= 10){
    console.log("変数xは10以上です");
}else if (x >= 5){
    console.log("変数xは5以上10未満です");
}else{
    console.log("変数xは5未満です");
}

var rank = 'B';
switch(rank){
    case 'A':
        console.log('Aランクです');
        break;
    case 'B':
        console.log('Bランクです');
        break;
    case 'C':
        console.log('Cランクです');
        break;
    default:
        console.log('ランク外です');
        break;
}