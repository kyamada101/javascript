//document = "element_tag.html";
//文書ツリーから要素（今回はURL）を取得するためのコードをjavascriptで書く
//Tagで'a'となっているものをリストで取ってくる
var list = document.getElementsByTagName('a');
    for (var i = 0, len = list.length; i < len; i++){
        console.log(list.item(i).href);
    }
console.log("これが表示されてたらスクリプトが実行されてる");
var current = new Date();
var result = document.getElementById('result');
result.textContent = current.toLocaleString();