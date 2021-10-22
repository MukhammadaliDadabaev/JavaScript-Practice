
/* Task 1: Juda oson task!

showNumbers(10);

function showNumbers(limit) {...code...
}

Brauzer console da:
0 "EVEN"
1 "ODD"
2 "EVEN"
3 "ODD"
4 "EVEN"
5 "ODD"
6 "EVEN"
7 "ODD"
8 "EVEN"
9 "ODD"
10 "EVEN" */

/* Shart:
 showNumbers() degan fuksiya yarating, limit degan parametri bilan. Va 0 dan biz chegaralab qo'ygan raqamgacha sonlarni toq va juftligini aytib ketsin. Yuqorida ko'rishingiz mumkinki, 10 deb chegaralagan edik, shu holat namoyon bo'ldi */

// ------------------------JAVOBI  <-------------------------------//
//-------------------> 1-usul

/* showNumbers(10) 

function showNumbers(limit) {
  for (var m = 0; m <= limit; m++) {
    if (m % 2 ===0) console.log(m, 'EVEN');
    else console.log(m, 'ODD'); 
  }
} */   

//-----------------------> 2-usul

/* function showNumbers(limit) {
  for (var m = 0; m <= limit; m++) {
    let result = m % 2 === 0 ? 'EVEN' : 'ODD';
    console.log(m, result);
  }
}
showNumbers(10) */


//-----------------------> 3-usul

function showNumbers(limit) {
  for (var m = 0; m <= limit; m++) {
    let result = !(m % 2) ? 'EVEN' : 'ODD';
    console.log(m, result);
  }
}
showNumbers(10)












