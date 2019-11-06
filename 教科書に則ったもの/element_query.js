//文字列で'external'と入っているものをすべて取ってくる
//一般的にはget~でとってきた方が速いので、複雑な条件を使うときのみqueryを使う
var list = document.querySelectorAll('#list external');
for (var i = 0, len = list.length; i < len; i++){
    console.log(list.item(i).href);
}
console.log("これが表示されてたらスクリプトが実行されてる");