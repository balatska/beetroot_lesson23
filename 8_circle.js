// Запросить у пользователя длину окружности и периметр квадрата. 
// Определить, может ли такая окружность поместиться в указанный квадрат.

let L = prompt("Введите длину окружности");
let P = prompt("Введите периметр квадрата");

if ((L / Math.PI) <= (P / 4)) {
    console.log("Окружность поместится в квадрат");
} else {
    console.log("Окружность не поместится в квадрат");
}
