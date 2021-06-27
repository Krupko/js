"use strict";
// let a = prompt('Какое официальное название java script')
// const b = 'ECMAScript';

// if (a == b) {
//    console.log('Верно!');
// } else {
//    console.log('Не знаете? ECMAScript!');
// }

// let a = prompt('Напишите любое число');
// if (a > 0) {
//    alert(1);
// } else if (a < 0) {
//    alert(-1);
// } else {
//    alert(0);
// }

// let b = (a > 0) ? alert(1) :
//    (a < 0) ? alert(-1) :
//       alert(0);


// let an = 3,
//    bn = 2;
// (an + bn < 4) ? alert('Мало') : alert('Много');

// let i = 0;

// while (i++ < 5) {
//    alert(i);
// }

// for (let i = 0; i < 5; i++) alert(i);

//let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';

// let x = 1;
// while (x <= 5) {
//    console.log(' x = ' + x);
//    x += 1;
// }
// let x = 7;

// do {
//    console.log('x = ' + x);
//    x -= 1;
// } while (x >= 1);

// let x = 1;
// while (x <= 5) {
//    console.log(" x = " + x);
//    x = x + 1;
// }
// let y = 5;
// do {
//    console.log("y = " + y);
//    y -= 1;
// } while (y <= 1);

// let i = 3;
// while (i) {
//    console.log(i);
//    i--;
// }

// let i = 0;
// while (i++ < 5) console.log(i);

// for (let i = 0; i < 5; i++) {
//    console.log(i);
// };
// for (let i = 2; i <= 10; i++) {
//    if (i % 2 == 0) {
//       console.log(i);
//    }
// }

// let i = 0;
// while (i < 3) {
//    console.log(`number ${i}!`);
//    i++;
// }

// for (let i = 0; i < 3; i++) {
//    alert(`number ${i}!`)
// }










// function testWhile(a) {
//    let x = 0, y = 0;
//    while (y <= a) {
//       if (y % 2 == 0) {
//          x = x + y;
//       }
//    }
//    return x;
// }



// function testWhile(a) {
//    let x = 0, y = 0;
//    while (y <= a) {
//       if (y % 2 === 0) {
//          x += y;
//       }
//       y++;
//    }
//    return x;
// }
// console.log(testWhile(12));

// function test(c) {
//    let k = 0;
//    for (let i = 1; i <= c; i++) {
//       if (i % 2 == 0) {
//          k += i;
//       }

//    }
//    return k;
// }

// console.log(test(3));


// for (let i = 0; i < 15; i++) {
//    if (i == 7) {
//       break;
//    }
//    console.log('i = ' + i);
// }

// for (let i = 0; i < 15; i++) {
//    if (i == 9) {
//       continue;
//    }
//    console.log('теперь i = ' + i);
// }


// function test(n) {
//    let x = 0;

//    for (let i = 1; i <= n; i++) {
//       if ((n ^ 0) === n) {
//          x += n;
//       }
//       console.log(x);
//    }
// }
// console.log(test(2));

// function testCycle(k, n) {
//    let x = ' ';
//    for (let i = 1; i <= k; i++) {
//       x += ' ' + n;
//    }
//    return x;

// }
// console.log(testCycle(6, 5));


// function test(g, h) {
//    let r = '', i = 1;
//    while (i <= g) {
//       r += " " + h;
//       i++;
//    }
//    return r;
// }
// console.log(test(6, 5));

// function test(a, b) {
//    let x = '', i = a;
//    while (i <= b) {
//       x += " " + i;
//       i++;
//    }
//    return x;
// }

// console.log(test(5, 36));

// function test(a, b) {
//    let x = '';
//    if (a < b) {
//       for (let i = a; i <= b; i++) {
//          x += " " + i;
//       }
//    } else if (b < a) {
//       for (let i = b; i <= a; i++) {
//          x += " " + i;
//       }
//    } else {
//       x = a;
//    }
//    return x;
// }

// console.log(test(50, 115));

// function test(a, b) {
//    let x = "";
//    if (a < b && a >= 1 && b >= 1) {
//       for (let i = b; i >= a; i--) {
//          x += " " + i;
//       }
//    } else if (b < a && a >= 1 && b >= 1) {
//       for (let i = a; i >= b; i--) {
//          x += " " + i;
//       }
//    }
//    return x;
// }
// console.log(test(7, 112));


// function test(a, b) {
//    let x = 0;
//    if (a < b) {
//       for (let i = a; i <= b; i++) {
//          x += i * i;
//       }
//    }
//    else if (a > b) {
//       for (let i = b; i <= a; i++) {
//          x += i * i;
//       }
//    } else {
//       x = a * b;
//    }

//    return x;
// }
// console.log(test(2, 2));

// function test(n) {
//    let x = 0;
//    for (let i = 1; i < 2 * n; i = i + 2) {
//       if (i <= n) {
//          x = i;
//       }
//    }
//    return x;
// }
// console.log(test(9));

