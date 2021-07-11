"use strict";

// 1 задача:
let x = 5;

alert(++x); //5

//2 задача:
console.log([] + false - null + true); // NaN

//3 задача 
let y = 1;
let d = y = 2;
alert(d);    //2

// 4 задача
console.log([] + 1 + 2);  //12

//5 задача
alert("7"[0]);

//6 задача
console.log(2 && 1 && null && 0 && undefined);  // null
// Оператор && запинается на folse и выводит его подобно return

//7 задача 
console.log(!!(1 && 2) === (1 && 2));

//8 задача 
alert(null || 2 && 3 || 4);
//9 задача
const h = [1, 2, 3],
   j = [1, 2, 3];

console.log(h == j); //false

//10 задача

alert(+"Infinity");

//11 задача
console.log("Ёжик" > "яблоко"); //false

//12 задача
console.log(0 || "" || 2 || undefined || true || false);
