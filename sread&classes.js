/* // В JavaScript spread оператор (оператор расширения) обозначается как три точки (...).
//  Он позволяет развернуть (распаковать) элементы массива или объекта.
//   Вот несколько примеров использования:

// 1. В массивах
// spread оператор может развернуть элементы массива в другой массив или функцию.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // arr2 будет [1, 2, 3, 4, 5]
console.log(arr2);
// Здесь массив arr1 был "распакован" и объединён с новыми элементами.

// 2. В объектах
// Для объектов spread оператор помогает копировать или объединять объекты.

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // obj2 будет { a: 1, b: 2, c: 3 }

// Здесь объект obj1 был скопирован и добавлен в новый объект с дополнительным свойством c.

// 3. В функциях
// spread оператор можно использовать для передачи элементов массива как отдельных аргументов в функцию.
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  const result = sum(...numbers);  // то же самое, что sum(1, 2, 3)
  console.log(result);  // 6


 // У вас есть два массива. Используя spread оператор, объедините их в один массив.
 const fruits = ['apple', 'banana', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];
const fruitBerries = [...fruits,...berries];
console.log(fruitBerries);

// Ваш код здесь
// Ожидаемый результат: ['apple', 'banana', 'orange', 'strawberry', 'blueberry', 'raspberry']


// У вас есть массив чисел. Создайте его копию с помощью spread оператора и добавьте ещё одно число в конец.

let numbers = [10, 20, 30, 40];
 numbers = [...numbers, 50]
console.log(numbers);
// Ваш код здесь
// Ожидаемый результат: [10, 20, 30, 40, 50]

//У вас есть два объекта. Используя spread оператор, объедините их, добавив новое свойство.

const user = { name: 'John', age: 25 };
const location = { city: 'New York' };

// Ваш код здесь
// Ожидаемый результат: { name: 'John', age: 25, city: 'New York' }

// У вас есть массив чисел, и функция, которая принимает три аргумента. 
// Используйте spread оператор, чтобы передать значения массива в функцию.

function multiply(a, b, c) {
    return a * b * c;
  }
  
  const numbers = [2, 3, 4];
  
  // Ваш код здесь
  // Ожидаемый результат: multiply(2, 3, 4) вернёт 24 */
  

//   Основные понятия классов
// 1. Создание класса
// Класс создаётся с помощью ключевого слова class, а внутри него определяются методы. Вот простой пример класса:
class Car {
    // Конструктор — это специальный метод для создания и инициализации объектов
    constructor(brand, model) {
     this.brand = brand;
      this.model = model;
    }
  
    // Метод класса
    start() {
      console.log(`${this.brand} ${this.model} завёлся.`);
    }
    park() {
       console.log(`${this.brand} ${this.model} is parked.`)
    }
  }
  
  // Создание экземпляра класса
  const myCar = new Car('Toyota', 'Camry');
  const hisCar = new Car('Mazda', 'CX-5')
  myCar.start();  // Выведет: "Toyota Camry завёлся."
  hisCar.start();
  hisCar.park();

  
//   constructor — это специальный метод, который вызывается автоматически при создании нового экземпляра класса. 
//   В нём задаются начальные значения объекта.
// Методы — это функции, которые определяются внутри класса и могут быть вызваны у экземпляров этого класса.

// 2. Наследование классов
// Классы могут наследоваться от других классов, чтобы переиспользовать их функционал.
// Наследование выполняется с помощью ключевого слова extends.

class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity) {
      // Вызываем конструктор родительского класса
      super(brand, model);
      this.batteryCapacity = batteryCapacity;
    }
  
    charge() {
      console.log(`${this.brand} заряжается с батареей ёмкостью ${this.batteryCapacity} kWh.`);
    }
  }
  
  const myElectricCar = new ElectricCar('Tesla', 'Model S', 100);
  myElectricCar.start();  // Выведет: "Tesla Model S завёлся."
  myElectricCar.charge();  // Выведет: "Tesla заряжается с батареей ёмкостью 100 kWh."
  myElectricCar.park()

//   extends — позволяет одному классу наследовать методы и свойства другого класса.
// super — используется для вызова конструктора родительского класса. 
// Это нужно, чтобы передать аргументы в родительский класс.

// 3. Геттеры и сеттеры
// Геттеры и сеттеры позволяют управлять доступом к свойствам объекта.
class Person {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
  
    // Геттер
    get age() {
      return this._age;
    }
  
    // Сеттер
    set age(value) {
      if (value < 0) {
        console.log('Возраст не может быть отрицательным.');
      } else {
        this._age = value;
      }
    }
  }
  
  const person = new Person('Alice', 30);
  console.log(person.age);  // 30
  
  person.age = -5;  // Выведет: "Возраст не может быть отрицательным."
  console.log(person.age);  // 30

//   get — для получения значения свойства.
// set — для изменения значения с логикой проверки.

// 4. Статические методы
// Статические методы доступны только на самом классе, а не на его экземплярах.

class MathUtils {
    static add(a, b) {
      return a + b;
    }

   static multiply(a,b) {
return a * b;

    }
  }
const MathUt2 = new MathUtils(2, 3);
  console.log(MathUtils.add(5, 10));  // 15
  console.log(MathUt2.multiply(2, 3));

  //static — позволяет создать метод, который вызывается на классе напрямую, без создания объекта.


  

//   Задание: Создание и наследование классов
// Создай класс Animal, который будет иметь следующие свойства и методы:

// Свойства:
// name — имя животного.
// age — возраст животного.
// Методы:
// speak() — метод, который выводит в консоль строку ${name} издаёт звук.
// Создай класс Dog, который наследуется от класса Animal и добавляет:

// Метод speak() должен выводить ${name} гавкает.
// Создай экземпляры обоих классов и вызови метод speak() для каждого.


class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}
const genericAnimal = new Animal('Неизвестное животное', 5);
genericAnimal.speak();  // Выведет: "Неизвестное животное издаёт звук"

const dog = new Dog('Рекс', 3);
dog.speak();  // Выведет: "Рекс гавкает"
