// 1) • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }
// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = [
  {title: 'Thriller', artist: 'Michael Jackson', year: 1982},
  {title: 'Americana', artist: 'The Offspring', year: 1998},
  {title: 'Hybrid Theory', artist: ' Linkin Park', year: 2000}
];

const collection = {
  musicCollection: [...musicCollection],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.musicCollection.length) {
          return {value: this.musicCollection[index++], done: false};
        } else {
          return {done: true};
        }
      },
    };
  },
};

for (const album of collection) {
  console.log(`${album.title} -- ${album.artist} -- ${album.year}`);
}

// 2) Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
// Необходимо создать систему управления этими заказами, которая позволит:
// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.
// Повара и их специализации:
// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.
// Блюда и их повара:
// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.
// Заказы:
// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

// a) Map: специализация => повар
let specialization = new Map();

specialization.set("Пицца", "Виктор");
specialization.set("Суши", "Ольга");
specialization.set("Десерты", "Дмитрий");

// b) Map: повар => Set блюдо
let cook = new Map();

let victor = {name: "Виктор"};
let victorDish = new Set();
victorDish.add('Пицца "Маргарита"');
victorDish.add('Пицца "Пепперони"');

let olga = {name: "Ольга"};
let olgaDish = new Set();
olgaDish.add('Суши "Филадельфия"');
olgaDish.add('Суши "Калифорния"');

let dmitry = {name: "Дмитрий"};
let dmitryDish = new Set();
dmitryDish.add('Тирамису');
dmitryDish.add('Чизкейк');

cook.set(victor, victorDish);
cook.set(olga, olgaDish);
cook.set(dmitry, dmitryDish);

// c) Map: клиент => Set заказ

let order = new Map();

let person1 = {name: "Алексей"};
let person1Ord = new Set();
person1Ord.add('Тирамису');
person1Ord.add('Пицца "Пепперони"');

let person2 = {name: "Мария"};
let person2Ord = new Set();
person2Ord.add('Суши "Калифорния"');
person2Ord.add('Пицца "Маргарита"');

let person3 = {name: "Ирина"};
let person3Ord = new Set();
person3Ord.add('Чизкейк');

order.set(person1, person1Ord);
order.set(person2, person2Ord);
order.set(person3, person3Ord);

console.log(`Специализация: Пицца -  ${specialization.get("Пицца")}`);
console.log(`Специализация: Суши -  ${specialization.get("Суши")}`); 
console.log(`Специализация: Десерты -  ${specialization.get("Десерты")}`);  

console.log(`Блюда повара Виктора: ${[...cook.get(victor)]}`); 
console.log(`Блюда повара Ольги: ${[...cook.get(olga)]}`);
console.log(`Блюда повара Дмитрия: ${[...cook.get(dmitry)]}`);

console.log(`Заказ Алексея: ${[...order.get(person1)]}`);
console.log(`Заказ Марии: ${[...order.get(person2)]}`);
console.log(`Заказ Ирины: ${[...order.get(person3)]}`);