// Массив вопросов и правильных ответов
       const quiz = [
           {
               question: "Какой цвет небо?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2 // номер правильного ответа
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];
function playTest(){
let correct = 0;

for (let i=0; i < quiz.length; i++){
    let answer = Number(prompt(quiz[i].question + "\n" + quiz[i].options.join("\n")));
    if (answer === quiz[i].correctAnswer) {
       correct++;
    } 
}     

alert('Кол-во правильных ответов: ' + correct);
    
}
// Игра "Угадай число"
function guessNum(){
    let num = Math.floor(Math.random() * 100) + 1;
    let question;
    while (question != num) {
        question = Number(prompt('Угадайте число от 1 до 100'));
        if (question === num){
            alert('Угадал!');
        } else if (question < num){
            alert('Загаданное число больше');
        } else {
            alert('Загаданное число меньше');
        }
    }
}
// Игра "Простая арифметика"
function arithmetic(){
    let a = Math.floor(Math.random() * 20) +1;
    let b = Math.floor(Math.random() * 20) +1;

    let operation = Math.floor(Math.random() * 4) + 1; 
    let correctResponse;
    let userAnswer;
    if (operation === 1) {
        correctResponse = a + b;
        userAnswer = Number(prompt(a + '+' + b));
    } else if (operation ===2){
        correctResponse = a - b;
        userAnswer = Number(prompt(a + '-' + b));
    }else if(operation === 3){
        correctResponse = a * b;
        userAnswer = Number(prompt(a + '*' + b));
    }else{
        correctResponse = a / b;
        userAnswer = Number(prompt(a + '/' + b));
    }
    
    if (userAnswer === correctResponse){
        alert('Верно!');
    }else{
        alert('Ошибка!');
    }
}

// Игра "Переверни текст"
function reverso(){
    let userQuestion = prompt("Введите текст");
    userQuestion = userQuestion.split('').reverse().join('');

    alert (userQuestion);
}

