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