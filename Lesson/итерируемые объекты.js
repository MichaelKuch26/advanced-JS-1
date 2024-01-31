const string = 'Hello';
console.log(string[2]); // l
console.log(string.length); // 5

for (const str of string) {
  console.log(str);
}

// Все работает как с циклами 

// Мы хотим из него сделать последовательность, где на выходе получим от 1 до 17

// let range = {
//   from: 1, 
//   to: 17
// }

// // 1. Вызов for...of сначала вызывает эту функцию

// range[Symbol.iterator] = function () {
//   // ...Она возвращает объект итератора:
//   // 2. Далее, for(...of...) работает только с этим итератором, запрашивая у него новые значения
//   return {
//     current: this.from,
//     last: this.to,
    
//     // 3. next() вызывается на каждой итерации цикла for(...of...)
//     next() {
//       // 4. он должен вернуть значение в виде объекта {dont:..., value:...}
//       return this.current <= this.last ? {done: false, value: this.current++} : {done: true};
//     }
//   };
// };
// // теперь работает
// for (let number of range) {
//   console.log(number);
// }

// Можно было и вместе, но тогда this будет общий
let range = {
  from: 1,
  to: 17,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    return this.current <= this.to ? {done: false, value: this.current++} : {
      done: true };
  }
};
for (let number of range) {
  console.log(number);
}


// Array.from

let pseudo = {
  0: 'first',
  1: 'second',
  2: 'elem',
  length: 3
}

let array = Array.from(pseudo);
console.log(array);
console.log(array.pop());

let pseudo2 = 'It`s Array Like!';
let array2 = Array.from(pseudo2);
console.log(array2);