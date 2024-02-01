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

const viktor = {
  name: 'Виктор',
  specialty: 'пицца'
  }
  
  const olga = {
  name: 'Ольга',
  specialty: 'суши'
  }
  const dmitry = {
  name: 'Дмитрий',
  specialty: 'десерты'
  }
  
  const pizzas = ['Пицца "Маргарита"', 'Пицца "Пепперони"'];
  const sushi = ['Суши "Филадельфия"', 'Суши "Калифорния"'];
  const desserts = ['Тирамису', 'Чизкейк'];
  
  const cooks = new Map();
  cooks
  .set(viktor, pizzas)
  .set(olga, sushi)
  .set(dmitry, desserts);
  
  const clients = [
  {name: 'Алексей'},
  {name: 'Мария'},
  {name: 'Ирина'}
  ];
  
  const orders = new Map();
  orders
  .set(clients[0], [pizzas[1], desserts[0]])
  .set(clients[1], [sushi[1], pizzas[0]])
  .set(clients[2], [desserts[1]]);
  
  console.log('\nПовара и их специализации:\n');
  for (const cook of cooks.keys()) {
  console.log(`${cook.name} - специализация: ${cook.specialty}`)
  }
  console.log("\nБлюда и их повара:\n");
  for (const cook of cooks) {
  for (const dish of cook[1]) {
  console.log(`${dish} - повар: ${cook[0].name}`)
  }
  }
  
  console.log('\nЗаказы:\n');
  
  orders.forEach((value, key) => {
  console.log(`Клиент ${key.name} заказал: ${value}`)
  })