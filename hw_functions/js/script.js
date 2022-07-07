/**
TASK-01
Написати фунцію, яка буде визначати чи є буква в слові на визначеній позиції.

Arguments:
word - слово, на якому треба буде перевіряти наявність букви
index - позиція символу на якому треба перевірити здогадку
char - буква, наявність якої треба перевіряти в слові
Return value
true або false, залежно від того є буква в слові чи ні. 
**/

function checkCharPosition(word, index, char) {
  return console.log("index = char" + ":", word[index] === char);
}

checkCharPosition("gogi", 3, "...");
checkCharPosition("boolean", 4, "j");
checkCharPosition("tiger", 0, "t");
checkCharPosition("understand", 6, "t");
checkCharPosition("fire", 0, "t");
checkCharPosition("indian", 2, "t");

/**
 TASK-02
Напишіть функцію, яка перевірятиме довжину свого аргументу.

Arguments:
str - строка, довжину якої має перевіряти функція
expectedLength - очікувана довжина строки
Return value
true або false
**/

function checkLength(str, expectedLength) {
  return console.log(
    "str = expectedLength" + ":",
    str.length === expectedLength
  );
}

checkLength("gogi", 4);
checkLength("aston", 4);

/**
TASK-03
Напишіть гру для відгадування слова.

Game flow:
Спитати чи користувач хоче зіграти у гру?
Попросити користувача загадати слово.
Для кожного символу у загаданому слові, перевірити чи є такий символ у слові взагалі та чи співпадає здогадка користувача із символом на поточній позиції.
Якщо здогадка користувача вірна - переходити до наступного символу
Якщо здогадка користувача не вірна - повторювати запит символу допоки не набереться 5 помилкових здогадок, далі - вивести в консоль "You lose!". Якщо одна зі здогадок виявилася вірною - переходити на відгадування наступного символу.
Якщо користувач виграв - вивести у консоль "You win!" 
**/
