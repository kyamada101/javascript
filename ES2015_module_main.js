//import * as app from './ES2015_module_lib'
const {Member} = require('./ES2015_module_lib') //node.jsではこれじゃないと動かない

var m = new Member('太郎', '山田');
console.log(m.getName());