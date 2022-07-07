/**
TASK-01
Написати функцію without, котра повертає новий обь'єкт без вказаних значень.

Arguments:
object - будь-який обь'єкт
propertyName - назва властивості для видалення
Return value
Jбʼєкт, у якого вказана властивість має значення null.

Код для перевірки:
**/

function without(object, propertyName) {}

// const data = { login: "gogi", password: "GloryOfUkraine", address: "Kiev" };
// console.log(without(data, "address")); // { login: 'gogi', password: 'GloryOfUkraine', address: null}

/**
TASK-02
Написати функцію profileMagazie, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним.

Arguments:
label - назва магазину
schedule - розклад роботи
products - масив продуктів, наявних на складі
Return value
Обʼєкт інтернет магазину, у якого наявні одноїменні аргументам властивості, а також 2 методи - makeBlackFriday, verifySore

метод makeBlackFriday
Перебрати увесь масив товарів, для кожного товару вирахувати нову ціну, просто перемноживши стару ціну на розмір знижки.

Arguments:
discount - розмір знижки числом від 0 до 1
Return value
Відсутнє

метод verifySore
Метод має "пробігати" по усім товарам магазину, та для кожного звіряти його кількість з таким самим товаром на складі. Якщо кількість товару у магазині не збігається - переназначити її таку ж як на складі.

Arguments:
store - массив товарів на складі
Return value
Строка зі списком назв товарів кількість яких не зпівпала з наявністю у магазині.
**/

function profileMagazine(label, schedule, magazineProducts) {
  const magazine = {
    label: label,
    schedule: schedule,
    products: magazineProducts,

    makeBlackFriday,
    verifySore,
  };

  return magazine;
}

let polo = profileMagazine("Polo", "Mon-Fri: 10-19, Sa-Su:10-22", [
  "shirt",
  "polo",
  "socks",
]);
console.log(polo);

function makeBlackFriday(discount) {
  if (discount > 0 && discount < 1) {
    this.price = this.price * discount;
  } else {
    return null;
  }
}
function verifySore(store) {}

polo.makeBlackFriday(0.2);
