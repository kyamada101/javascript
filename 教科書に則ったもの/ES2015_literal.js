//オブジェクトリテラルの構文
let member = {
    name: '山田太郎',
    birth: new Date(1970, 5, 25),
    toString(){
        return this.name + '/誕生日：' + this.birth.toLocaleDateString()
    }
};

console.log(member.toString());


//プロパティの名前が変数と同じ場合には、値の指定を省略可能
let name2 = '山田太郎';
let birth2 = new Date(1970,5,25);
let member2 = {name2,birth2}; //この部分で、name2=??・birth2==??という指定がいらない

console.log(member2);

//式の値から動的にプロパティ名を生成することも可能
let i = 0;
let member3 = {
    name3: '山田太郎',
    birth3: new Date(1970, 5, 25),
    ['memo'+ ++i]: '正規会員',
    ['memo'+ ++i]: '支部会長',
    ['memo'+ ++i]: '関東',
};
console.log(member3);