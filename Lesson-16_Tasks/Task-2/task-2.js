//------------------------ Task 2:
/* showstars(biror son);

function showstars(rows) {
   ...
}

ushbu taskda biror son kiritiladi. Shu songacha bo'lgan yulduzchalar ketma-ketlikda chiqadi.*/


//----------------------> Task-2 Answer ************ 

/* showStars(15) 

function showStars(rows) {
    for (var m = 1; m <= rows; m++ )  
        
       switch (m) {
            case 1:
              console.log('*'); 
              break;
            case 2:
              console.log('**'); 
              break;
            case 3:
               console.log('***');   
               break;
            case 4:
              console.log('****'); 
              break;
            case 5:
              console.log('*****'); 
              break;
            case 6:
              console.log('******');    
              break;
            case 7:
              console.log('*******'); 
              break;
            case 8:
              console.log('********'); 
              break;
            case 9:
              console.log('*********'); 
              break;
            case 10:
              console.log('**********');
                break 
            case 11:
                console.log('***********'); 
                break;
            case 12:
                console.log('************'); 
                break;
            case 13:
                console.log('*************'); 
                break;
            case 14:
                console.log('**************'); 
                break;
            case 15:
                console.log('***************'); 
                break;
       }
}
 */


function showStars(rows) {
  for(let row = 1; row <= rows; row++) {
    let pattern = '';
    for(let i = 0; i < row; i++) pattern += '*';
    console.log(pattern);
  }
}

showStars(10)


