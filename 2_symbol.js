// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
// который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let number = parseInt(prompt("Введи число от 0 до 9"));
let symbol = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];

if(number >= 0 && number <= 9) {
    console.log(symbol[number]);
} else {
    console.log("Введи число от 0 до 9!");
}
