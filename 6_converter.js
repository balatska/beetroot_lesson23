// Написать конвертор валют. 
// Пользователь вводит количество USD, 
// выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let summ = prompt("Введите сумму (USD)");
let convert = prompt("В какую валюту хотите перевести (EUR, UAH, AZN)?");

let eurExchangeRate = 0.91;
let uahExchangeRate = 24.24;
let aznExchangeRate = 0.59;

if (convert == "EUR") {
    console.log(summ * eurExchangeRate);
} else if (convert == "UAH") {
    console.log(summ * uahExchangeRate)
} else if (convert == "AZN") {
    console.log(summ * aznExchangeRate)
} else {
    console.log("Введены некоректные данные");
}
