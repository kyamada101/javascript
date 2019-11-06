var Animal = function(){};
Animal.prototype = {
    walk:function(){
        console.log('トコトコ...');
    }
};

var SuperAnimal = function(){};
SuperAnimal.prototype = {
    walk:function(){
        console.log('ダダダダ!!');
    }
};

var Dog = function(){};
Dog.prototype = new Animal(); //Animalオブジェクトを継承
var d1 = new Dog();
d1.walk();

Dog.prototype = new SuperAnimal(); //SuperAnimalオブジェクトを継承
var d2 = new Dog();
d2.walk();
d1.walk(); //d1が生成された時点でd1はAnimal継承のDogに固定されるので、「トコトコ...」が表示される