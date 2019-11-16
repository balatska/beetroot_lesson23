// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

let numbers = prompt("Введи пятизначное число"); 
console.log(numbers);

if ((numbers[0] == numbers[4]) && (numbers[1] == numbers[3])) {
    console.log("Это число - палиндром!");
} else {
    console.log("Это число - не палиндром.");
}
