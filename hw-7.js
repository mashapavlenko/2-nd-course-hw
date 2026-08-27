// Задание 1
const peopleByAge = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(peopleByAge.sort((a,b) => {
    return a.age - b.age
}));

// Задание 2
function isPositive(number) {
 if (number > 0 ) {
    return true;
 } else {
    return false;
 }
}
function isMale(person) {
if (person.gender === "male") {
   return true; 
} else {
    return false;
}
}
function filter(arr, ruleFunction) {
 const output = [];

 for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (ruleFunction(element)) {
        output.push(element)
    }
 }
 return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));

// Задание 3
const timer = () => {
    const interval = setInterval(() => {
    console.log(new Date());
}, 3000);

setTimeout(() => {
    clearInterval(interval)
    alert('30 секунд прошло')
}, 30000);
}

timer();

//Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

//Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => {
    sayHi('Глеб');
});