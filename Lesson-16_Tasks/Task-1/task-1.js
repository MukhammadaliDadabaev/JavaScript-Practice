//------------------------------ Task 1:
/* console.log(sum(biror son));

//3 ga bo'linuvchi sonlar
//5 ga bo'linuvchi sonlar

function sum(limit) {
   ...
}

👆 ushbu taskda biror son kiritiladi. Shu songacha bo'lgan sonlardan qaysilari 3 ga bo'linadi, 5ga bo'linadi. Shu 3 ga bo'lingan va 5 ga bo'lingan sonlarning barchasini yig'indisini hisoblovchi dastur tuzilsin!

Masalan: biror son = 10;

// 3 ga bo'linadigan: 3, 6, 9
// 5 ga bo'linadigan: 5, 10

Barchasini qo'shilmasi javob: 33! */


//-----------------------> Task-1  Answer ******************
/* //--------------------------- 1-usul 
console.log(sum(38));

function sum(limit) {
    var sum = 0;

    for (var i=0; i<=limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) 
            sum += i;
    }
    return sum;
} */

//--------------------------- 2-usul 

function sum(limit) {
    var sum = 0;

    for (var i=0; i<=limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    return sum;
}

console.log(sum(10));





