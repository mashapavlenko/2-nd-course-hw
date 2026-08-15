//Задание 1
const numbers = [1, 5, 4, 10, 0, 3];

for(let i = 0; i < numbers.length; i ++){
    console.log((numbers[i]));

    if (numbers[i] === 10) {
        break;
    }
}

// Задание 2
const nums = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i ++){
    if (nums[i] === 4){
        console.log(i);
    }
}

// Задание 3
const Numbers = [1, 3, 5, 10, 20];

let joinedNumbers = Numbers.join(' ');
console.log(joinedNumbers);

//Задание 4
const arr = [];
for (let i = 0; i < 3; i++){
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
}
arr.push(row);
}
console.log(arr);

//Задание 5
const array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array);

//Задание 6
const Arr = [9, 8, 7, 'a', 6, 5];
Arr.sort();
console.log(Arr);


const filteredArr = Arr.filter(function(element) {
    return element !== 'a';
});

console.log(filteredArr);

// Задание 7
const newArr = [9, 8, 7, 6, 5];


let guessNum =Number (prompt('Угадай число'));
if (newArr.includes(guessNum)) {
    alert ('Угадал');
} else {
    alert('Не угадал');
}

//Задание 8
const string = 'abcdef';
let splitString = string.split('');

let reversedString = splitString.reverse();
let joinedString = reversedString.join('');
console.log(joinedString);

//Задание 9
const newArray = [[1, 2, 3],[4, 5, 6]];

const result = [...newArray[0],...newArray[1]];
console.log(result);

// Задание 10
const randomNumbers = [1,3,5,7,9,10];
for (let i = 0; i < randomNumbers.indexOf(10); i++){
    console.log(randomNumbers[i] + randomNumbers[i + 1]);
}

//Задание 11
const integers = [2,4,6,8,10];

const squaredIntegers = integers.map(integers => integers ** 2);
console.log(squaredIntegers);

//Задание 12
const words = ["hello", "world", "cat"];
function wordsLength(words){
    return words.map(function(word){
        return word.length;
    })
}

console.log(wordsLength(words));

//Задание 13

const intArr = [5, -3, 10, -7, 2, -1];

const filteredIntegers = intArr.filter(intArr => intArr < 0);
console.log(filteredIntegers);

//Задание 14
const newNumber = [];

for(let i = 0; i < 10; i++){
    newNumber[i] = (Math.floor(Math.random() * 11));
}
const evenNumbers = newNumber.filter(function(number) {
    return number % 2 === 0;
});

console.log(newNumber);
console.log(evenNumbers);

//Задание 15
const numArr = [];
for(let i = 0; i < 6; i++){
    numArr[i] = Math.floor(Math.random() * 10) + 1;
}

const sum = numArr.reduce(function(total, number){
    return total + number;
});

const average = sum / numArr.length;
console.log(average);