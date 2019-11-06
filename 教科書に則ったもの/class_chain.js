var Animal = function(){};

Animal.prototype = {
    walk : function(){
        console.log('トコトコ...');
    }
};

var Dog = function(){
    Animal.call(this);
};
Dog.prototype = new Animal(); //DogのプロトタイプとしてAnimalクラスを継承 ⇒ Animalの中のwalkを呼び出せる
//Dogのプロトタイプとしてbarkを追加
Dog.prototype.bark = function(){
    console.log('わんわん');
}

var d = new Dog();
d.walk();
d.bark();

var Cat = function(){
    Animal.call(this);
};
Cat.prototype = new Animal();
Cat.prototype.move = function(){
    console.log('スヤスヤ');
}

var c = new Cat();
c.move();
c.walk();