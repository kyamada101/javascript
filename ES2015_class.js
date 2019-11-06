class Member{
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

//classで作られたものは内部的には関数だが、functionと等価ではない点も多い。
//関数として呼び出せない・定義前のクラスは呼び出せないなど
let m = new Member('太郎','山田'); //newは必須。また、上部のクラス定義の前にこれを置くことはできない
console.log(m.getName());


//extendsを使えば既存のクラスを継承したサブクラスを継承可能
//サブクラスでメソッド・コンストラクターを上書き=（派生クラスでの再定義）も可能
//superを使えば基底クラスの使いたい部分のみを持ってくることも可能
class BusinessMember extends Member{
    constructor(firstName, lastName, clazz){
        super (firstName, lastName); //superを使って基底クラスの定義を持ってきている
        this.clazz = clazz;
    }
    work(){
        return this.getName() + 'は働いています';
    }
    getName(){
        return super.getName() + '/役職：' + this.clazz; //基底クラスのgetNameを持ってきたうえで、役職表記を追加
    }
}

let bm = new BusinessMember('太郎','山田','課長');
console.log(bm.getName()); //継承前のMemberクラスに入っているgetNameも呼び出し可能
console.log(bm.work());