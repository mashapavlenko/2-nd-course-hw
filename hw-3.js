//Задание 1
let i = 0;

while (i < 2) {
    console.log("Привет");
    i++;
}

//Задание 2

let a = 1;

while (a>=1 && a<=5) {
    console.log(a);
    a++;
}

//Задание 3

let b = 7;

do {
    console.log(b);
    b++;
} while (b>=7 && b<=22);

//Задание 4

let obj = {
    "Коля":'200',
    "Вася":'300',
    "Петя":'400'
}

for (let name in obj){
    console.log(`${name} — зарплата ${obj[name]} долларов`);
}

//Задание 5

let n=1000;
let num = 0;
while (n >=50 ) {
    n = n/2;
    num++;
}
console.log(n);
console.log(num);

//Задание 6
let friday = 5;
for (let day = friday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}