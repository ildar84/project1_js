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

// function getMathResult(num, pr) {
//     if (pr > 0 && typeof(pr) === 'number') {
//         let str = '';
//         for (let i = 1; i <= pr; i++) {
           
//             if (i === pr) {
//                 str +=`${num * i}`;
//             } else {
//                 str +=`${num * i}---`;
//             }
               
//         }
//         return str;      
//     } else {
//         return num;
//     }
// }

// console.log(getMathResult(5, 3));
// console.log(getMathResult(5, 0));

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },

//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
            
//         });

//         return str;
//     }
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));




// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }
// console.log(
// showProgrammingLangs(personalPlanPeter));

// function showExperience(plan) {


//     // const {exp} = plan.skills;
//     // return exp;

// }

// showExperience(personalPlanPeter);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     str = '';

//     arr.length === 0 ? str = `Семья пуста` : str = `Семья состоит из `;
//     arr.forEach(name => {
//         str += `${name} `;
//     });
//     return str;    
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase());
//     });
// }

// standardizeStrings(favoriteCities);


