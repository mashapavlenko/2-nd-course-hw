//Задание 1
let a = 10;
alert(a);

a=20;
alert(a);

//Задание 2
let year = 2007;
alert(`Год выпуска первого IPhone: ${year}`);

//Задание 3
let creator = "Brendan Eich";
alert(`Имя создателя языка JavaScript: ${creator}`);

//Задание 4
let x = 10;
let y= 2;

alert(x + y);
alert(x-y);
alert(x*y);
alert(x / y);

//Задание 5
let result = 2**5;
alert(result);

//Задание 6 (Тут пришлось поменять название переменной,потому что "а" уже используется в первом задании)
let c = 9;
let b = 2;

alert(c % b);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);


//Задание 8

let age = prompt("Сколько вам лет?");
alert(age);

//Задание 9
const user = {
    name: "Maria",
    age: 21,
    isAdmin: true
};

console.log(user);

//Задание 10

let askName = prompt("Ваше Имя:");
alert(`Привет, ${askName}!`);