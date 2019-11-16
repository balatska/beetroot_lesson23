// let numbers = prompt("Введи трехзначное число"); 
// console.log(numbers);
// // console.log(typeof numbers);
// // let value = parseInt(numbers.split(''));
// // console.log(typeof value);
// // console.log(value);

// if ((numbers[0] == numbers[1]) || (numbers[1] == numbers[2]) || (numbers[0] == numbers[2])) {
//     console.log("Одинаковые цифры!");
// } else {
//     console.log("Одинаковых цифр нет.");
// }


// let numbers = prompt("Введи трехзначное число"); 
// console.log(numbers);
// console.log(typeof numbers);
// let value = numbers.split('');
// console.log(value);
// console.log(typeof value);

// value[0] = +value[0];
// value[1] = +value[1];
// value[2] = +value[2];

// if (isNaN) {
//     console.log("Ошибка. Введи трехзначное число");
// } else if ((value[0] == value[1]) || (value[1] == value[2]) || (value[0] == value[2])) {
//     console.log("Одинаковые цифры!");
// } else {
//     console.log("Одинаковых цифр нет.");
// }


let numbers = +prompt("Введи трехзначное число"); 
console.log(numbers);
console.log(typeof numbers);

if (isNaN(numbers)) {
    console.log("Ошибка. Введи трехзначное число");
} else if ((numbers<99 && numbers>1000) && (numbers[0] == numbers[1]) || (numbers[1] == numbers[2]) || (numbers[0] == numbers[2])) {
    console.log("Одинаковые цифры!");
} else {
    console.log("Одинаковых цифр нет.");
}