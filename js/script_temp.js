"use strict";

// for (let i = 5; i < 11; i++) {

//     console.log(i);
// }

// for (let i = 20; i >= 10; i--) {
     
//     if (i == 13) {
//         break;
//     } else {
//         console.log(i); 
//     }
// }

// for (let i = 2; i < 11; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let i = 2;

// while ( i <= 15) {
//     i++;

//     if (i % 2 === 0) {
//         continue;
        
//     } else {
//         console.log(i);
        
//     }
    
    
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let arr = [];
// for (let i = 5; i < 11; i++) {
//     arr[i - 5] = i;
// }

// console.log(arr);

// function sayHello(name) {
//     let str = '';
//     str = `Привет,${name}`;
//     console.log(str);
//     return str;
// }

// sayHello('Антон');

// function returnNeighboringNumbers(num) {
//     let arr = [];
//     arr = [num - 1, num, num + 1];
//     console.log(arr);
// }

// returnNeighboringNumbers(5);

// function getMathResult(num, p) {
//     if (typeof(p) !== 'number' || p <= 0) {
//         return num;
//     }

//     let str = '';
//     for (let i = 1; i <= p; i++) {
//         if (i === p) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`
//         }
//     }
    
//     console.log(str);
//     return str;
// }

// getMathResult(5, 3);

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let {age} = personalPlanPeter;
        let {languages} = personalPlanPeter.skills;
        let str = '';
        str = `Мне ${age} и я владею языками: `;
      
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        console.log(str);
        return str;
    }
};


// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    let {exp} = plan.skills;
    console.log(exp);
}

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;

    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}

showProgrammingLangs(personalPlanPeter);

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';
    arr.length == 0 ? str = 'Семья пуста' : str = 'Семья состит из: ';
    arr.forEach((item) => {
        str += `${item} `;
    });

    // console.log(str);
    return str;
    
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach((item) => {
        console.log(item.toLowerCase());
    });
}

standardizeStrings(favoriteCities);