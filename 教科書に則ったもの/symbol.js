let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

console.log(typeof sym1);
console.log(sym1.toString());
console.log(sym1 === sym2);
console.log(sym1 == sym2);

const MONDAY = Symbol();
console.log(MONDAY === 'MONDAY');