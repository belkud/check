import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'






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
let a = {}
function summ(a:any, b:any) {
  return a + b
}
console.log(summ(6/2, 9/3));


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

// let date = new Date(); /* Создаем новый объект Date */
// let hour = date.getHours(); /* Текущий час */
// let minutes = date.getMinutes(); /* Текущая минута */
// let seconds = date.getSeconds(); /* Текущая секунда */

// if (seconds > 60) 
// {
// minutes = "0" + minutes; 
// }



