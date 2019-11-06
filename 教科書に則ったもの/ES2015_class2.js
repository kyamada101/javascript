class Area{
    static getTriangle(base, height){ //メソッドの先頭にstaticをつければ静的メソッドになる
        return base * height / 2;
    }
}

console.log(Area.getTriangle(10,5));