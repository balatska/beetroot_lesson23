// Запросить у пользователя его возраст и определить, кем он является:
// ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).


function whoAmI() {

  if (isNaN(age)) {
    console.log("Неправильно введен возраст!");
  } else {
    if (age >= 0 && age < 12) {
      console.log("Ребенок");
    } else if (age < 18) {
      console.log("Подросток");
    } else if (age < 60) {
      console.log("Взрослый");
    } else {
      console.log("Пенсионер");
    }
  }
}

let age = parseInt(prompt("Сколько тебе лет?"));
whoAmI();

  