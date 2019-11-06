const AUTHOR = 'Yamada Yoshihiro';

//文頭にexportをつければ、外部からのアクセスができるようになる
//export class Member{
module.exports.Member = class Member{ //Node.jsではこれじゃないと動かない
    constructor(firstName, lastName){ //コンストラクターの名前はconstructorで固定。C#のようにprivate/publicは利用できない
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //get/setを使ってプロパティを定義することも可能
    //firstNameプロパティ
    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        this._firstName = value;
    }

    //lastNameプロパティ
    get lastName(){
        return this._lastName;
    }
    set lastName(value){
        this._lastName = value;
    }

    getName(){ //メソッド名は自由につけられる
        return this.lastName + this.firstName;
    }
}
module.exports.Area = class Area{ //Node.jsではこれじゃないと動かない
//export class Area{
    static getTriangle(base, height){ //メソッドの先頭にstaticをつければ静的メソッドになる
        return base * height / 2;
    }
}

