// method map

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers);

// Что здесь происходит:

// У нас есть массив numbers с числами от 1 до 5.
// Метод map() применяет функцию к каждому элементу массива.
// В этой функции каждый элемент умножается на 2.
// Результат (новый массив) сохраняется в переменную doubled.
// Таким образом, map() позволяет легко трансформировать массив, не изменяя исходный.

// Увеличить числа на 10
// Дан массив чисел: [5, 10, 15, 20, 25]. Используя map(), создай новый массив, в котором каждое число увеличено на 10.
const numbers1 = [5, 10, 15, 20, 25];
const addedTen = numbers1.map((num) => num + 10);
console.log(addedTen);

// Преобразовать строки в заглавные буквы
// Дан массив строк: ['apple', 'banana', 'cherry']. Используя map(), создай новый массив, где все строки будут в верхнем регистре.

const fruitsArr = ["apple", "banana", "cherry"];
const newFruits = fruitsArr.map((fruit) => fruit.toUpperCase());
console.log(newFruits);

// Найти длину каждой строки
// Дан массив слов: ['hello', 'world', 'javascript', 'map']. Используя map(), создай массив, который будет содержать длину каждого слова.
const words1 = ["hello", "world", "javascript", "map"];
const wordsLength = words1.map((word) => word.length);
console.log(wordsLength);

// Преобразовать массив объектов
// Дан массив объектов:
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 20 },
];
const peopleName = people.map((person) => person.name);
console.log(peopleName);
//Используя map(), создай массив, который будет содержать только имена людей.

//   Дан массив чисел: [1, 2, 3, 4, 5]. Используя map(),
//    создай новый массив, который содержит квадраты этих чисел (число умноженное на само себя).
const arr1 = [1, 2, 3, 4, 5];
const sqr = arr1.map((n) => n ** 2);
console.log(sqr);

array.reduce(function (accumulator, currentValue, index, array) {
  // логика преобразования
}, initialValue);

// Пример:
// 1. Найти сумму всех чисел в массиве:

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15
// Что происходит:

// Начальное значение аккумулятора — 0.
// Метод reduce() начинает с первого элемента:
// 0 + 1 = 1, затем
// 1 + 2 = 3,
// 3 + 3 = 6, и так далее.
// В итоге аккумулятор возвращает итоговое значение — 15.

// Пример без initialValue:

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(sum); // 15
//Здесь reduce() автоматически использует первый элемент массива (1) как начальное значение аккумулятора.

//Ещё один пример: Объединение строк

const words = ["Hello", "World", "JavaScript"];

const sentence = words.reduce(function (accumulator, currentValue) {
  return accumulator + " " + currentValue;
});

console.log(sentence); // "Hello World JavaScript"

//Таким образом, метод reduce() позволяет аккумулировать значения в один итог, будь то сумма, строка, массив или объект.

// Вот несколько задач для практики с методом reduce():

// Найти произведение всех чисел в массиве
// Дан массив чисел: [2, 3, 4, 5]. Используя reduce(), вычисли произведение всех чисел в массиве.
const arrToMultirly = [2, 3, 4, 5];
let multiplied = arrToMultirly.reduce((num, mult) => mult * num);
console.log(multiplied);

// Посчитать количество вхождений каждого элемента
// Дан массив строк: ['apple', 'banana', 'apple', 'orange', 'banana', 'banana']. Используя reduce(), создай объект, который показывает, сколько раз каждое слово встречается в массиве.
const arr = ["apple", "banana", "apple", "orange", "banana", "banana"];
let count = arr.reduce(function (acc, currentValue) {
  if (acc[currentValue]) {
    acc[currentValue] += 1;
  } else {
    acc[currentValue] = 1;
  }
  return acc;
}, {});

console.log(count);

//'apple': 2

// Найти максимальное число
// Дан массив чисел: [10, 25, 5, 42, 33]. Используя reduce(), найди максимальное число в массиве.
const arr2 = [10, 25, 5, 42, 33];
let max = arr2.reduce((el, max) => (el > max ? el : max));
console.log(max);

// Объединить массивы в один
// Дан массив массивов: [[1, 2], [3, 4], [5, 6]]. Используя reduce(), объедини эти массивы в один: [1, 2, 3, 4, 5, 6].
let arr3 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let flatArr = arr3.reduce((acc, arr) => acc.concat(arr), []);
console.log(flatArr);

// Подсчитать общую сумму товаров
// Дан массив объектов, представляющих товары:
const cart = [
  { name: "apple", price: 100 },
  { name: "banana", price: 150 },
  { name: "orange", price: 120 },
];
let price = cart.reduce((sum, obj) => sum + obj.price, 0);
console.log(price);
//Используя reduce(), подсчитай общую сумму всех товаров в корзине.

//   Метод sort()

// Синтаксис:

array.sort([compareFunction]);

//Пример 1: Сортировка чисел
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function (a, b) {
  return a - b; // сортировка по возрастанию
});
console.log(numbers); // [1, 5, 10, 25, 40, 100]

//Пример 2: Сортировка строк
const fruits = ["banana", "apple", "cherry", "mango"];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'cherry', 'mango']

//Пример 3: Сортировка объектов по свойству
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 20 },
];

people.sort(function (a, b) {
  return a.age - b.age; // сортировка по возрасту
});
console.log(people);
// [{name: 'Jack', age: 20}, {name: 'John', age: 25}, {name: 'Jane', age: 30}]

//   Задачи на метод sort():
// Отсортировать массив чисел по убыванию
// Дан массив чисел: [8, 3, 10, 1, 4]. Используя sort(), отсортируй его по убыванию.
let arr4 = [8, 3, 10, 1, 4];
sortedArr4 = arr4.sort((a, b) => b - a);
console.log(sortedArr4);

// Отсортировать массив строк по длине
// Дан массив строк: ['apple', 'banana', 'kiwi', 'watermelon']. Используя sort(), отсортируй его по длине строк, начиная с самой короткой.
let strArr = ["apple", "banana", "kiwi", "watermelon"];
sortedStr = strArr.sort((a, b) => a.length - b.length);
console.log(sortedStr);

// Отсортировать массив объектов по алфавиту (по имени)
// Используя sort(), отсортируй этот массив по полю name в алфавитном порядке.:
const people = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 35 },
];
people.sort((a, b) => a.name.localeCompare(b.name)); // Сортировка по полю name

console.log(people);

//Метод filter()
array.filter(callback(element, index, array));

//Пример 1: Фильтрация четных чисел

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0; // оставляем только четные числа
});
console.log(evenNumbers); // [2, 4, 6]

//Пример 2: Фильтрация строк по длине
const words = ["hello", "world", "JavaScript", "is", "great"];
const longWords = words.filter(function (word) {
  return word.length > 4; // оставляем только слова длиной больше 4 символов
});
console.log(longWords); // ['hello', 'world', 'JavaScript', 'great']

//Пример 3: Фильтрация объектов по значению свойства
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 20 },
];

const adults = people.filter(function (person) {
  return person.age >= 21; // оставляем только тех, кто старше 21 года
});
console.log(adults); // [{name: 'John', age: 25}, {name: 'Jane', age: 30}]

//   Задачи на метод filter():
// Отфильтровать нечетные числа
// Дан массив чисел: [1, 2, 3, 4, 5, 6, 7]. Используя filter(), создай новый массив, который содержит только нечетные числа.

let numsToFilter = [1, 2, 3, 4, 5, 6, 7];
let filteredNums = numsToFilter.filter((num) => num % 2 !== 0);
console.log(filteredNums);

// Найти слова длиной больше 5 символов
// Дан массив строк: ['hello', 'world', 'JavaScript', 'coding', 'fun']. Используя filter(), создай новый массив, который содержит только те слова, которые длиннее 5 символов.

let strToFilter = ["hello", "world", "JavaScript", "coding", "fun"];
let filteredStr = strToFilter.filter((str) => str.length > 5);
console.log(filteredStr);

// Отфильтровать объекты с возрастом старше 25 лет
// Используя filter(), создай новый массив, который содержит только тех людей, чей возраст больше 25 лет:
const people = [
  { name: "Anna", age: 18 },
  { name: "Mike", age: 30 },
  { name: "Sara", age: 22 },
];
let sorted = people.filter((person) => person.age > 25);
console.log(sorted);
