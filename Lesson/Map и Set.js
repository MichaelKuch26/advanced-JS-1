// let map = new Map();

// map.set('1', 'str1'); // строка в качестве ключа
// map.set(1, 'num1'); // цифра как ключ
// map.set(true, 'bool1'); // будево значение как ключ

// // Map созраняет тип ключей, так что в этом случае сохранится 2 разных значения:
// console.log(map.get(1)); // num1
// console.log(map.get('1')); // str1
// console.log(map.get(true)); // bool1

//get set

// let map = new Map();
// map.set('1', 'We')
//   .set(1, 'likes')
//   .set(true, 'JS');
// console.log(map);

// // Перебор коллекции Map

// let recipeMap = new Map ([
//   ['огурец', 500],
//   ['помидор', 350],
//   ['лук', 50]
// ]);
// // Перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable); // огурец помидор лук
// }
// // Перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//   console.log(amount); // 500 350 50
// }
// // Перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) {
//   console.log(entry); 
// }
// // Выполняем функцию для каждой пары (кдюч, значение)
// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// Работа с объектами

// // Object.entries поможет создать Map
// let map = new Map(Object.entries(obj));
// // Object.fromEntries поможет создать объект из Map
// let obj = Object.fromEntries(map);

// Set

// let buddies = [
//   'Жучка',
//   'Тузик',
//   'Булька',
//   'Тузик',
//   'Бобик',
//   'Жучка',
//   'Валера',
//   'Жучка',
//   'Тузик',
//   'Манька',
// ];
// let uniqueBuddies = new Set(buddies);
// console.log(uniqueBuddies); // уникальные = 6 из 10

// Переводим обратно в массив

let buddies = [
  'Жучка',
  'Тузик',
  'Булька',
  'Тузик',
  'Бобик',
  'Жучка',
  'Валера',
  'Жучка',
  'Тузик',
  'Манька',
];

let uniqueBuddies = new Set(buddies);
console.log(uniqueBuddies);
let arr = Array.from(uniqueBuddies);
console.log(arr);