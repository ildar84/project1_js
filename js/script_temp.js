"use strict";

for (let i = 5; i < 11; i++) {

    console.log(i);
}

for (let i = 20; i >= 10; i--) {
     
    if (i == 13) {
        break;
    } else {
        console.log(i); 
    }
}

for (let i = 2; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let i = 2;

while ( i <= 15) {
    i++;

    if (i % 2 === 0) {
        continue;
        
    } else {
        console.log(i);
        
    }
    
    
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let arr = [];
for (let i = 5; i < 11; i++) {
    arr[i - 5] = i;
}

console.log(arr);

function sayHello(name) {
    let str = '';
    str = `Привет,${name}`;
    console.log(str);
    return str;
}

sayHello('Антон');

function returnNeighboringNumbers(num) {
    let arr = [];
    arr = [num - 1, num, num + 1];
    console.log(arr);
}

returnNeighboringNumbers(5);

function getMathResult(num, p) {
    if (typeof(p) !== 'number' || p <= 0) {
        return num;
    }

    let str = '';
    for (let i = 1; i <= p; i++) {
        if (i === p) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`
        }
    }
    
    console.log(str);
    return str;
}

getMathResult(5, 3);

