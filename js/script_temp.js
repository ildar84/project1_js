// for (let i = 5; i < 11; i++) {
//     console.log(i);
// }

// for (let i = 20; i > 10; i--) {
//     if (i === 13)  break;
//         console.log(i);
    
// }

// for (let i = 2; i <= 10; i++) {
//     if ( i % 2 === 0) {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i ++;
//         continue;
        
//     } else {
//         console.log(i);
//         i ++;
//     }
// }

// const arrayOfNumbers = [];

// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);

// function sayHello(name) {
//     let str = `Привет, ${name}`;
//     return str;
// }

// console.log(sayHello('Антон'));

// function getMathResult(num, pr) {
//     if (pr > 0 && typeof(pr) === 'number') {
//         let str = '';
//         for (let i = 1; i <= pr; i++) {
//             if (i === pr) {
//                 str +=`${num * i}`;
//             } else {
//                 str +=`${num * i}---`
//             }
//         }

//         return str;

//     } else {
//         return num;
//     }

// }

// console.log(getMathResult(5, 3));
// console.log(getMathResult(5, 0));

function getMathResult(num, pr) {
    if (pr > 0 && typeof(pr) === 'number') {
        let str = '';
        for (let i = 1; i <= pr; i++) {
           
            if (i === pr) {
                str +=`${num * i}`;
            } else {
                str +=`${num * i}---`;
            }
               
        }
        return str;      
    } else {
        return num;
    }
}

console.log(getMathResult(5, 3));
console.log(getMathResult(5, 0));