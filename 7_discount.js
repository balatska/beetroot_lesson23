// Запросить у пользователя сумму покупки 
// и вывести сумму к оплате со скидкой: 
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let summ = +prompt("Введите сумму покупки");

if (summ < 200) {
    console.log(summ - summ * 0.03);
} else if (summ <= 300) {
    console.log(summ - summ * 0.05);
} else if (summ >= 500) {
    console.log(summ - summ * 0.07);
}
