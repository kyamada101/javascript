var Member = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

//プロトタイプを複数作りたいときは列挙して作れる。（こっちの方が見やすい）
Member.prototype = {
    getName : function(){
        return this.lastName + ' ' + this.firstName;
    },
    toString : function(){
        return this.lastName + this.firstName;
    }
};

var mem1 = new Member('達也','田中');
console.log(mem1.getName());
console.log(mem1.toString());
