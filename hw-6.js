//Задание 1
const word = 'js';
console.log(word.toUpperCase());

//Задание 2
function findWords(words, search) {
    return words.filter(function(word) {
        return word.toLowerCase().startsWith(search.toLowerCase());
    });
}

const words = ["Apple", "apricot", "banana", "application"];

console.log(findWords(words, "ap"));

//Задание 3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbers);
const max = Math.max(...numbers);
console.log(min);
console.log(max);

//Задание 5
function random(){
    console.log(Math.floor(Math.random() * 10) + 1);
}
random();

//Задание 6
function randNum(number){
    let result = [];
    for(let i = 0; i < number / 2; i++){
        result.push(Math.random() * number);
    }
    return result;
}
console.log(randNum(10));

//Задание 7
function twoNumbers(a,b){
    return Math.floor(Math.random() * (b - a +1) + a);
}
console.log(twoNumbers(2,4));

//Задание 8
let todaysDate = new Date();
console.log(todaysDate);

//Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate()+73);
console.log(currentDate);

//Задание 10
function returnDate(myDate){
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
    "Пятница", "Суббота"];

    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()] + ". ";

    let fullTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
    return fullDate + fullTime;
}
console.log(returnDate(new Date()));