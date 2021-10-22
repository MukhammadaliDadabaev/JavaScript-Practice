// Bu misol Swap -( Joyini-almashtirish)
/* let a = 7;
let b = 8;

a = a + b; //a=15 
b = a - b; //b=7
a = a - b; //a-8

console.log(a);
console.log(b); */

// -------------------------------------
// Task -> 13-Darsniki
// -> Ternary-operatori true va false shartlariga yahshi, ozgina ishga !**

/* const myAge = 15;
const yoshChegarasi = myAge >= 17 ? 'Ruhsat' : 'Mumkin-emas';
console.log(yoshChegarasi); */

/*** ✅ CONTROL FLOW 1-qism  (nazorat qilish oqimi)
     ☑ If...else...  ( agar...bo`lmasa)--> MISOL--!   ***/

/* const myAge =12;
if (myAge == 9) {
    console.log('Namozni o`qish shart');
} else if (myAge >= 11) {
    console.log('Namozni o`qimaganing uchun (GUNOHKOR) bo`lasang');
} else if (myAge < 7) {
    console.log('Namoz shartlarini bilasangmi?');
} else {
    console.log('Duoda bo`l');
} */

// ------------------------------------------

//---- Mantiqiy &&-va ||-yoki ga Misol -----------------
/* let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
console.log('Hour: ', hour, 'Minute: ', minute);

let isOfficeOpen = (hour >= 9 && minute >=0);
console.log(isOfficeOpen); */

// -----Mantiqiy !-emasga  Misol----------------
/* let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
console.log('Hour: ', hour, 'Minute: ', minute);

let isOfficeOpen = (hour >= 9 || minute >=0);
let isOfficeClosed = !isOfficeOpen;

console.log('Ofis ochiq: ', isOfficeOpen);
console.log('Ofis yopiq: ', isOfficeClosed); */

/******--> ORK -> yoki ( || )-yani 3-taligiga misol -> false || 3 || 5 <-( javobi: 3.chiqadi, chunki boshdan boshlab tekshiradi 1-chi false, 2-chi true, va consolga 3 chiqadi ) Bunga misolda-ko`ramiz---> *******/
//--------------- 1.misol
/* var defaultColor = 'green';
var userColor = '';
var currentColor = userColor || defaultColor;
console.log(currentColor); */

//----------------- 2.misol
/* let person = {
    name: 'Omon',
    age: 33,
    jonh: 'Muhandis'
}
console.log(person.jonh || 'Ishsiz'); */

//----------- Qo`shish va Ko`paytirish ( + , * )-> ga misol

//--------------- 1-misol
/* let a = 3 + 3 * 5;   //-> 1-chi ko`paytiradi, keyin-qo`shadi ***<-
console.log(a);  */ //-> Javob: 18 <-chiqadi

//--------------- 2-misol
/* var b = (3 + 3) * 5;   //-> 1-chi Qo`shadi, keyin-ko`paytiradi ***<-
console.log(b);  */ //-> Javob:  30 <-chiqadi

//--------------- 3-misol
// console.log(false && true || true);    // Javob: true ( 1-chi va-ni tekshiradi )

//--------------- 4-misol
// console.log(false && (true || true));  // Javob: false (1-chi qavsni ichini-tekshiradi)

//-----------------------> SAVOL-JAVOBLAR  <-----------------------
//------------- 1-Savol:
/* let isOpen = false;
console.log(isOpen || !isOpen );  */ //-> Javob: true <-

//-------------- 2-Savol:
/* let a;
let b = null;
let c = undefined;
let d = 4;
let e = ' ball';
let f = a || b || c || d || e;
console.log(f); */ //-> Javob: 4--chiqadi <-

//------------> Algaritim-masala ( FizzBuzz ) <---------------**

//-------------------- 1-usul ----
/* function fizzBuzz(input) {

  if (input % 15 ===0) {
    console.log('FizzBuzz');
  }
    else if (input % 5 ===0) {
    console.log('Fizz');
  } 
    else if (input % 3 ===0) {
    console.log('Buzz');
  }
   else console.log(input);  
}
const output = fizzBuzz(15); */

//----------------------- 2-usul -------
/* function fizzBuzz(input) {

    if (input % 15 ===0) 
    return 'FizzBuzz';

    else if (input % 5 ===0) 
    return 'Fizz';

    else if (input % 3 ===0) 
    return 'Buzz';

    else return input;
}
const output = fizzBuzz(45);
console.log(output); */

//--------------------  3-usul -----
/* function fizzBuzz(input) {
  if (typeof input !== "number") return "Son kiriting!";

  if (input % 15 === 0) return "FizzBuzz";
  else if (!(input % 5)) return "Fizz";
  else if (!(input % 3)) return "Buzz";
  else return input;
}
const output = fizzBuzz(30);
console.log(output); */

//---------------------------------------------------------------

//---------- Masala-Katta yoki Kichik ( true-false )-------

//--------------------- 1-usul
/* function buManzara(width, height) {
    if (width > height) {
        return true;
    }else {
        return false;
    }
}
const result = buManzara(300, 500);
console.log(result); */

//--------------------- 2-usul
/* function buManzara(width, height) {
   return width > height ? true : false;
}
const result = buManzara(300, 500);
console.log(result); */

//--------------------- 3-usul
/* function buManzara(width, height) {
    return width > height;
}
const result = buManzara(700, 500);
console.log(result); */

// Masala--> 2-ta sonni qabul-qilib VA 2-ta maksimal qaytarish funksiya --//
//--------------- 1-usul
/* function maxNumber(a, b) {
    if (a > b) return a;
    else if (b > a) return b;
}
const maximum = maxNumber(33, 55);
console.log(maximum); */

//--------------- 2-usul
/* function maxNumber(a, b) {
     return a > b ? a : b; 
}

const maximum = maxNumber(33, 55);
console.log(maximum); */

//------------------> for-loop misollar <------------------------//

//---------------- 1-usul
/* let potatoes = 15; // <-- Archiladigan-kartoshka soni
for (let i = 0; i <= potatoes; i++) {
       console.log(i + 'ta kartoshka archildi');
} */

//---------------- 2-usul -> Toq sonlarni-chiqaradi
/* let potatoes = 5
for (let i=1; i<=potatoes; i++) {
    if (i%2 !==0)
    console.log(i + 'ta kartoshka archildi');
} */

//------------- Bu-obyektda string-ni aniqlash misoli ---------------//
/* let car = {
    model: 'Damas',
    marke: 'Van',
    year: 1998,
    price: 5000
}
function showProperties(obj){
    for (let key in obj) {
        if (typeof obj[key] === 'string')
        console.log(key, obj[key]);
    }
}
showProperties(car); */

//----------- TALABANI_BALINI aniqlovchi-funksiya misoli --------------//
/* const marks = [80, 80, 50];
console.log(calculateGrade(marks));   

function calculateGrade(marks) {
    let yot = 0;
    for (let mark of marks)
    yot += mark;

    let average = yot / marks.length;
    if (average > 50) return 'F';
    if (average > 60) return 'D';
    if (average < 70) return 'C';
    if (average < 80) return 'B';
    if (average < 90) return 'A';
    return 'E';
} */

//---> Toq-sonlarni-chiqaruvchi  funksiyaga--->  misol <-----------
/* showNumbers(18);

function showNumbers(limit) {
    for (let toq = 2; toq <= limit; toq++) 
        if (isPrime(toq)) console.log(toq);
    
}
function isPrime(toq) {
     for (let juft = 2; juft < toq; juft++) 
            if (toq % juft === 0) 
            return false;
     return true;   
} */

// -----------------

/* showNumbers(10) 

function showNumbers(limit) {
    for (let number = 0; number <= limit; number++ )  
        
       switch (number) {
            case 0:
              console.log('0 "EVEN"'); 
              break;
            case 1:
              console.log('1 "ODD"'); 
              break;
            case 2:
               console.log('2 "EVEN"');   
               break;
            case 3:
              console.log('3 "ODD"'); 
              break;
            case 4:
              console.log('4 "EVEN"'); 
              break;
            case 5:
              console.log('5 "ODD"');    
              break;
            case 6:
              console.log('6 "EVEN"'); 
              break;
            case 7:
              console.log('7 "ODD"'); 
              break;
            case 8:
              console.log('8 "EVEN"'); 
              break;
            case 9:
              console.log('9 "ODD"'); 
              break;
            case 10:
              console.log('10 "EVEN"'); 
              break;
            default:
              console.log('Bazada yoq');               
       }
} */

//Average = 70

/* const marks = [50, 60, 70, 80, 90];
console.log(calculateGrade(marks)); 

function calculateGrade(marks) {
  let average = calculateAverage(marks);
    if (average < 50) return 'F';
    if (average < 60) return 'D';
    if (average < 75) return 'C';
    if (average < 80) return 'B';
    if (average < 90) return 'A';
    return 'M';
}

function calculateAverage(array) {
let jam = 0;
  for (let value of array) 
    jam += value;

    let average = jam / array.length;
    return average;
} */

/* ushbu taskda baholar array ichida berilgan va shu baholarning o'rtacha arifmetik hisoblanib, o'rta bahosi chiqariladi va shu o'rta bahosi qaysinga to'g'ri kelsa shu harfni qaytaradi */

// 1-59:    F
// 60-69:   D
// 70-79:   C
// 80-89:   B
// 90-100:  A

// Bu funksiya-qiymat qaytaradi -> ( Bu Void-bo`lmagan funksiya )

/* function right2() {
  return 'Hello java Hi';
}
let result = right2();
console.log(result.replace('Hello', 'loHel'));
console.log(result.replace('Hello', 'vaja'));
console.log(result.replace('Hello', 'Hi')); */

/* Task 1: right2

String nomi berilgan,  shu string ning oxirgi 2ta harfini boshiga olib qo'y. Agar string 2 ta dan iborat bo'lsa, o'zini qaytarsin!

Masalan funksiya chaqirilsa:
right2('Hello') → loHel
right2('java') → vaja
right2('Hi') → Hi */

/* let text = 'You are our member and you are registered';
console.log(text.replace('registered', 'completed')); */

//-------------------------- 1.Taskni - Javobi
/* function right2() {
var text = 'Hello';
var result = text.replace('Hello', 'loHel'); 
console.log(result);
var test = 'java';
var test = test.replace('java', 'vaja'); 
console.log(test); 
var Bye = 'Hi';
var Bye =Bye.replace(); 
console.log(Bye);            
}
right2('Hello');
right2('java');
right2('Hi'); */

/* Task 2: — makeAbba

Console dastur yarating, quyidagini bajarsin:

Masalan funksiya chaqirilsa:
makeAbba('Hi', 'Bye') → HiByeByeHi
makeAbba('Yo', 'Alice') → YoAliceAliceYo
makeAbba('What', 'Up') → WhatUpUpWhat */

//------------------------2.Taskni - Javobi
function texts(firstName, lastName) {
  let hello = "ByeHi";
  let  salom = "AliceYo";
  let alo = 'UpWhat';
  console.log('HiBye'+ hello);
  console.log('YoAlice' + salom);
  console.log('UpWaht'+ alo);
}
texts('Hi','Bye');
texts('Yo','Alice');
texts('What','Up');
