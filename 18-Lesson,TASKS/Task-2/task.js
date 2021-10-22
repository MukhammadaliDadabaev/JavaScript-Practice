

/* Task 2:

//Average = 70

// 1-59:    F
// 60-69:   D
// 70-79:   C
// 80-89:   B
// 90-100:  A


👆 ushbu taskda baholar array ichida berilgan va shu baholarning o'rtacha arifmetik hisoblanib, o'rta bahosi chiqariladi va shu o'rta bahosi qaysinga to'g'ri kelsa shu harfni qaytaradi */


const marks = [50, 60, 70, 80, 90];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
   let sum = 0;
    for (let mark of marks)
    sum += mark;

    let avrj = sum / marks.length;
    if (avrj < 50) return 'F';
    if (avrj < 60) return 'D';
    if (avrj < 70) return 'C';
    if (avrj < 80) return 'B';
    return 'A';
}


