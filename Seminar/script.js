// 1. Создать механизм для безопасного добавления метаданных к объектам книг с использованием Symbol.;
// Создать уникальные символы для метаданных: отзывы, рейтинг, теги.;
// Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных);
// Создать объект книги, добавить метаданные и вывести их на консоль.

// const reviewSumbol = Symbol('review');
// const ratingSumbol = Symbol('rating');
// const tagsSymbol = Symbol('tags');

// // Функция для добавления метаданных к объектам 
// function addMetadata (book, metadataType, data) {
//   if (!book[metadataType]) {
//     book[metadataType] = [];
//   }
//   book[metadataType].push(data);
// }

// // Функция для извлечения метаданных из объекта
// function getMetadata(book, metadataType) {
//   return book[metadataType];
// }

// // Создание объекта книги и добавление метаданных
// let book = {
//   title: '1984',
//   author: 'George Orwell'
// };

// addMetadata(book, reviewSumbol, 'Отличная книга о диспотии!');
// addMetadata(book, ratingSumbol, 5);
// addMetadata(book, tagsSymbol, 'dystopia');

// // Вывод метаданных для книги
// console.log(getMetadata(book, reviewSumbol));
// console.log(getMetadata(book, ratingSumbol));
// console.log(getMetadata(book, tagsSymbol));


// 2. Используя Symbol.iterator, создайте объект 'Библиотека', который можно итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// Создайте объект librari, которй содержит массив книг и имеет свойство-символ Sumbol.iterator
// Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку.
// Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.

// const books = [
//   {title: '1984', author: 'George Orwell'},
//   {title: 'Brave New World', author: 'Aldous Huxley'},
//   {title: 'Fahrenheit 451', author: 'Ray Bradbury'}
// ];

// const library = {
//   books: [...books],
//   [Symbol.iterator]: function () {
//     let index = 0;
//     return {
//       next: () => {
//         if (index < this.books.length) {
//           return {value: this.books[index++], done: false};
//         } else {
//           return {done: true};
//         }
//       },
//     };
//   },
// };

// for (const book of library) {
//   console.log(book.title, book.author);
// }

// 3. Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них. Однако у иаких коллекций нет методов массива, и здесть на помощь приходит Array.from . В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.

// Дан код html:


{/* <div>Element 1</div>
<div data-active="true">Element 2</div>
<div>Element 3</div>
<div data-active="true">Element 4</div> */}

// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data-active.
// Выведите результат на консоль

// </aside>

// const arrayOfDataActive = document.querySelectorAll('div');
// const array = Array.from(arrayOfDataActive);
// const newArray = array.filter((element) => element.hasAttribute('data-active'))
// newArray.forEach(element => {
//   console.log(element);
// });

// 4. Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вел данные уроки.

// a) Map будет использоваться для хранения соответствия между уроком и преподавателем.
// b) Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент

// a) Map: урок => преподаватель
let lessons = new Map();
lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");

// b) Map: студент => Set уроков
let students = new Map();

let ivan = {name: "Ivan"};
let ivanLessons = new Set();
ivanLessons.add(["Математика", " История"]);

let elena = {name: "Elena"};
let elenaLessons = new Set();
elenaLessons.add(["Физ-ра", " Алгебра", " Русский", "Геометрия"]);

students.set(ivan, ivanLessons);
students.set(elena, elenaLessons);

// Проверка
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // "Смирнов"
console.log(`Уроки Ивана: ${[...students.get(ivan)]}`); //"Математика", "История"

console.log(`Уроки Елены: ${[...students.get(elena)]}`);