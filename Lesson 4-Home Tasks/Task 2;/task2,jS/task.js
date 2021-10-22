

/* Task 2:
const marks = [80, 80, 50];

Average = 70

1-59: F
60-69: D
70-79: C
80-89: B
90-100: A

console.log(calculateGrade(marks));
function calculateGrade(marks) {
   ...
}

👆 ushbu taskda baholar array ichida berilgan va shu baholarning o'rtacha arifmetik hisoblanib, o'rta bahosi chiqariladi va shu o'rta bahosi qaysinga to'g'ri kelsa shu harfni qaytaradi! */

// -------------------JAVOBI: <-----------------------------------------//

const marks = [80, 80, 50];
console.log(calculateGrade(marks));   

function calculateGrade(marke) {
    let yot = 0;
    for (let mark of marks)
    yot += mark;

    let average = yot = marks.length;
    if (average > 50) return 'F';
    if (average > 60) return 'D';
    if (average < 70) return 'C';
    if (average < 80) return 'B';
    if (average < 90) return 'A';
    return 'E';
}

