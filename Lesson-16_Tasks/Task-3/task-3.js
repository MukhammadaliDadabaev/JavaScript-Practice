//------------------- Task 3: ---------------------------
/* showPrimes(biror son);

function showPrimes(limit) {
   ...
}

👆 biror son kiritiladi va shu songacha bo'lgan tub sonlar chiqarilishi kerak!

tub sonlar -> o'ziga va 1 ga bo'linadigan sonlar!

Masalan: 1-dan 20 gacha bo'lgan sonlar orasida: 2, 3, 5, 7, 9, 11, 13, 17, 19 */



//----------------------------> Task-3 Answer ******************* 
//---------------------1-usul 
showPrimes(38)

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) 
       if (isPrime(number)) console.log(number);        
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) 
       if (number % factor === 0) return false;
    return true; 
}

//--------------------------------2-usul
/* showPrimes(38)

function showPrimes(limit) {
    for (let tub = 0; tub <= limit; tub++) 
    if (tub % 2 !== 0) console.log(tub);       
} */






