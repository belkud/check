import './style.css'






//! Задание 1

// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для пре-
// одоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа


// 1. Функция для вывода на экран информации об автомобиле.
const car = {
  producer: 'Kia',
  model: 'Rio',
  year:2019,
  averageSpeed: 10,
  distance: 80
}
console.log(car);


function showCarInfo(car:any) {
  console.log(car)
}
showCarInfo(car)


// 2. Функция для подсчета необходимого времени для пре-
// одоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необхо-
// димо делать перерыв на 1 час.


function findTime (car:any) {
  //! (что-то не могу понять как составить условие)
  let needTime = car.distance / car.averageSpeed
    if (needTime>4) {
      if (needTime%4) {
        return needTime + Math.floor(needTime-1)
      }
      return needTime + Math.floor(needTime)
    } else {
      return needTime 
    }
  }

console.log(findTime(car) + ' часов' );



//! Задание 2

// Создать объект, хранящий в себе отдельно числитель и зна-
// менатель дроби, и следующие функции для работы с этим объ-
// ектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.

// 1. Функция сложения 2-х объектов-дробей.
let a = {
  numerated: 9,
  denumerated: 3,
}
let b = {
  numerated: 4,
  denumerated: 2,
}
function summ(a:any, b:any) {
  return a + b
}
summ()


// 2. Функция вычитания 2-х объектов-дробей.
function substraction(a:any, b:any) {
  return a - b
}
console.log(substraction(5/1, 7/2));


// 3. Функция умножения 2-х объектов-дробей.
function multiplier (a:any,b:any) {
  return a * b
}
console.log(multiplier(8/4, 6/6));


// 4. Функция деления 2-х объектов-дробей.
function division (a:any,b:any) {
  return a / b
}
console.log(division(10/5, 4/2));


// 5. Функция сокращения объекта-дроби.
function reduce (a:any) {
  return a
}
console.log(reduce(4/8));





//! Задание 3

// Создать объект, описывающий время (часы, минуты, секун-
// ды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество
// секунд.
// 3. Функция изменения времени на переданное количество
// минут.
// 4. Функция изменения времени на переданное количество
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной
// части времени, может измениться и другая. Например: если ко
// времени «20:30:45» добавить 30 секунд, то должно получиться
// «20:31:15», а не «20:30:75».

const time = {}

function showTime(time:any) {
  
  return time
}
console.log(showTime(time))





// let hour = date.getHours(); /* Текущий час */
// let minutes = date.getMinutes(); /* Текущая минута */
// let seconds = date.getSeconds(); /* Текущая секунда */

// if (seconds > 60) 
// {
// minutes = "0" + minutes; 
// }



// 1. Создайте скрипт, который запрашивает ввод двух 
// чисел (используйте prompt) и после показывает их сумму.

// let num1 = Number(prompt ('первое число'))
// let num2 = Number(prompt ('второе число'))

// console.log(num1 + num2);

// 2. Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 
// округляется в меньшую сторону, тогда как 5..9 в большую сторону.

console.log(Math.round(1.37));
console.log(2.35.toFixed(20));




console.log(Number(5.35.toFixed(1)));



// Создайте функцию readNumber, которая будет запрашивать 
// ввод числового значения до тех пор, пока посетитель 
// его не введёт.

// Функция должна возвращать числовое значение.

  let num;
function readNumber() {

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

// alert(`Число: ${readNumber()}`);

console.log(250.0.toString()); // перевод числа в строку
console.log(String(250)); // перевод числа в строку

//==    нестрогое равенство
console.log('250'==250);
//===   строгое равенство
console.log('250'===250);


console.log(250.0.toString(2)); // система
console.log(250.0.toString(8));// система
console.log(250.0.toString(10));// система
console.log(250.0.toString(16));//  система


console.log(parseInt('5324.88fff'));
console.log(parseFloat('5.5fff'));


console.log(5+5);

console.log('afadadf');
