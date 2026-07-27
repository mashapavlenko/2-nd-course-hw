//Задание 1
function minNumber(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}

console.log(minNumber(8, 4));
console.log(minNumber(6, 6));

//Задание 2
function numberType(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(numberType(4));
console.log(numberType(7));

//Задание 3
function squaredNumber(c) {
    let square = c * c;
    console.log(square);
}

squaredNumber(4);

function getSquare(d) {
    return d * d;
}

let result = getSquare(6);
console.log(result);

//Задание 4
let askUser = Number(prompt('Сколько вам лет?'));

function age(num) {
    if (num < 0 ) {
        return 'Вы ввели неправильное значение';
    } else if (num >= 0 && num <= 12){
        return 'Привет, друг!';
    }else{
        return 'Добро пожаловать!';
    }
}

console.log(age(askUser));

//Задание 5
function checkNumber(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return 'Одно или оба значения не являются числом';
    } else {
        return Number(a) * Number(b);
    }
}

console.log(checkNumber(5, 3));
console.log(checkNumber('a', 3));
console.log(checkNumber('5', '3'));

//Задание 6
function askNumber() {
    let question = prompt('Введите число');

    if (isNaN(Number(question))) {
        return 'Переданный параметр не является числом';
    } else {
        return `${question} в кубе равняется ${question ** 3}`; 
    }
}

console.log(askNumber());

//Задание 7
const circle1 = {
    radius: 5,
    getArea(){
        return (Math.PI * this.radius ** 2);
    }, 
    getPerimeter () {
        return ( 2 * Math.PI * this.radius);
    }
}; 

const circle2 = {
    radius: 8,
     getArea(){
        return (Math.PI * this.radius ** 2);
    }, 
    getPerimeter () {
        return ( 2 * Math.PI * this.radius);
    }
};
console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter());

