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


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



import './style.css'


console.log (5+3)
console.log('dfsd');

console.log(typeof '');
console.log(typeof null);

// let a = ''
// console.log(a==false);

// let b
// console.log(typeof b);

let c = 5
console.log(typeof c);

console.log(typeof alert);
console.log(typeof prompt);

console.log(+false);
console.log(false);

console.log(+true);
console.log(true);



console.log('b'>'a');
console.log('x'>'X');

// таблица юникод


console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(NaN));



console.log( typeof undefined);
console.log( typeof null);
console.log( typeof NaN);

let e = 10 
if (e>5) {
  console.log('успешно');  
}

 

console.log(null==null);
console.log(5*'df');

console.log(typeof(5+'df'));


 


// let acc=0
// let num = [
//   8845,
// 56050,
// 5,
// 781,
// 142993,
// 1094,
// 103444,
// 2764,
// 8573,
// 116,
// 1,
// 1,
// 52840,
// 30337,
// 274978,
// 34312,
// 3,
// ]


// num.forEach(el=> 
//   acc+=el
// )

// console.log(acc/1000_000);
// console.log(acc.toFixed(1));






// ЧИСЛА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//! 1. Создайте скрипт, который запрашивает ввод двух чисел 
// (используйте prompt) и после показывает их сумму.

// let x = Number(prompt('введите число 1'))
// let y = Number(prompt('введите число 2'))
// console.log(x+y);



//! 2. Как правильно округлить 6.35? на 6.4

// let x = 6.35
// console.log(Math.round(x*10)/10);
// console.log(Math.round(x));



//! 3. Создайте функцию readNumber, которая будет запрашивать ввод 
// числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, 
// отправив пустую строку или нажав «Отмена». В этом случае 
// функция должна вернуть null.

// function readNumber() {
//   let num;

//   do {
//     num = prompt("Введите число", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') return null;
//   return +num;
// }

// alert(`Число: ${readNumber()}`);



//! 4. Этот цикл – бесконечный. Он никогда не завершится, почему?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }


//! 5.Напишите функцию random(min, max), которая генерирует 
// случайное число с плавающей точкой от min до max (но не 
// включая max).


function randomss(min, max) {
  return min + Math.random() * (max - min)
}

console.log(randomss(1,5));


// Напишите функцию randomInteger(min, max), которая генерирует 
// случайное целое (integer) число от min до max (включительно).
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log( randomInteger(1, 3) );



// СТРОКИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let str = 'evening'
console.log(str[1]);

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

let str2 = 'Hi'
str2 = str2[0] + 'I' +'N'
console.log(str2);


let day = 'Morning'
console.log( day.toLowerCase());
console.log( day.toUpperCase());

console.log(day[5].toUpperCase());


let str4 = 'rr';
let str5 = str4[1].toUpperCase()
console.log( str5 );








// ОБЪЕКТЫ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




// 1. Функция для вывода на экран информации об автомобиле.
// const car = {
//   producer: 'Kia',
//   model: 'Rio',
//   year:2019,
//   averageSpeed: 10,
//   distance: 80
// }
// console.log(car);


// function showCarInfo(car) {
//   console.log(car)
// }
// showCarInfo(car)


// модуль 2  продолжение объектов!!!!!!!!!!!!!!!!!!!!!!!!




// 1. Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.

function showSymbol(str) {
  str = str.toLowerCase();
  let res = { letter: 0, number: 0, symbol: 0 };
  for (let el of str) {
    if (el >= 'a' && el <= 'z') { //если латиница 
      res.letter++;
    }else if(el >= 'а' && el <= 'я') {  //если кирилица
      res.letter++;
    } else if (el >= '0' && el <= '9') {
      res.number++;
    } else {
      ++res.symbol;
    }
  }
  return res;
}
console.log(showSymbol('привет дорогой друг'));
// console.log(showSymbol('привет дорогой друг'));

 
//!!!!! второе решение задачи (не совсем верное)
 // let symbols = {
//   letter: 0,
//   number: 0,
//   symbol: 0,
// }

// function scoreSymbols(str) {
//   str = str.toLowerCase() // перевод символов в нижний регистр
//   for (let i = 0; i < str.length; i++) {
//     if (str[i]>='а' && str[i]<='я'){ // русская раскладка
//       ++symbols.letter
//     } else if(str[i]>='a' && str[i]<='z') { //английская раскладка
//       ++symbols.letter
//     } else if (str[i]>='0' && str[i]<='9') {
//       ++symbols.number
//     } else {
//         symbols.symbol++
//       } 
//     }
//     return str
// }

// scoreSymbols('Привет дорогой :%() fdhfghfghдруг45345')
// scoreSymbols('sfgd896834983')

// console.log(symbols);





// 2. Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.


function testFunc(num){
  let firstArray = ['','Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
  let secondArray = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
  let thirdArray = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];

  if(num>=0 && num<10){
      return firstArray[num]
    } else if (num>=10 && num<19){
      return secondArray[num-10]
    } else if (num>=20 && num<100) {
      let string = `${num}`
      let str = string.split('')[0]
      let str2 = string.split('')[1]
    
      return thirdArray[str-2] + ' ' + firstArray[str2]
    } else {
      return `число ${num} больше 100`
    }

}

console.log(testFunc(23));
console.log(testFunc(18));
console.log(testFunc(6));
console.log(testFunc(123));



// 3. Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.
let letters = [] as any

function changeRegisterLetters(str) {
  
  // str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {  //'i' - это каждый отдельный элемент
    // console.log(str[i]);
    if(str[i]>=0 && str[i]<=9 ) {
      let str2 = str[i]
      str2 = '_'
      letters.push(str2);
    } else if (str[i] == str[i].toLowerCase()){ // переводим символы с нижним в верхний регистр
      letters.push(str[i].toUpperCase())
    } else { // переводим символы с верхним в нижний регистр
      letters.push(str[i].toLowerCase())
    }  
      
    }

    return str
}
 
console.log(changeRegisterLetters('ПриВет КоТ357'));

console.log(letters.join(''));




// 4. Написать функцию, которая преобразует названия css-
// стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, text-align
// в textAlign.

 
function camelСase(str) 
{			
  let newWord = str.split('-'); //['text' 'align']
  
  for (let i=0; i<newWord.length; i++) {
    
    if ( i == 0 ) continue;
    let x =  newWord[i].split("") //['t', 'e', 'x', 't'] ['a', 'l', 'i', 'g', 'n']
    
    x[0] = newWord[i].charAt(1).toUpperCase()
    newWord[i] = x.join("") //Text Align
    console.log(newWord[i]);
  }

  str = newWord.join("")
  return str
}      			

let property1 = 'text-align'; // 'textAlign';
console.log( camelСase(property1) );
  
// let property2 = 'font-size'; // 'fontSize';
// console.log( camelСase(property2) );
 

 
// 7. Вычисляем результат в зависимости от оператора

function calculator(string) {

  const [num1, operator, num2] = string.split(' ');

  const a = Number(num1); // преобразовываем в число

  const b = Number(num2);


// Вычисляем результат в зависимости от оператора

  let result;

  switch (operator) {

    case '+':
      result = a + b;
      break;

    case '-':
      result = a - b;
      break;

    case '*':
      result = a * b;
      break;

    case '/':
      if (b === 0) {
        throw new Error('Division by zero');
      }

      result = a / b;
      break;

    default:
      throw new Error('Invalid operator');
  
  }

  // Возвращаем результат в виде строки

  return String(result);

}
console.log(calculator(3+3))
