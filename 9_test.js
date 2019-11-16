// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
// За каждый правильный ответ начисляется 2 балла. 
// После вопросов выведите пользователю количество набранных баллов.

// function rightAnswer() {
//     if (question1 == 1969 || question2 == 7 || question3 == 8) {
//         console.log("Верно!");
//     } else {
//         console.log("Садись, два.");
//     }
// }

let question1 = prompt("В каком году человек сделал первый шаг по Луне?\n 1. 1965;\n 2. 1969;\n 3. 1975.");
let question2 = prompt("Сколько гномов было в сказке о Белоснежке и семи гномах?\n 1. 7;\n 2. 3;\n 3. 40.");
let question3 = prompt("3 + 5?\n 1. 7;\n 2. 8;\n 3. 5.");


if (question1 == 1969) {
    console.log("Верно!");
} else {
    console.log("Садись, два.");
}

if (question2 == 7) {
    console.log("Верно!");
} else {
    console.log("Садись, два.");
}

if (question3 == 8) {
    console.log("Верно!");
} else {
    console.log("Садись, два.");
}


