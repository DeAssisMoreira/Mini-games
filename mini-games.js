// Генератор слуайных цветов

function randColors() {
    const colors = '123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colors[Math.floor(Math.random() * 16)];
    }
    return color;
}

const scriptBtnEL = document.querySelector('.scriptBtn');


scriptBtnEL.addEventListener('click', () => {
    const miniGames = document.querySelector('.mini-games');
    miniGames.style.backgroundColor = randColors();
})
























// Камень, ножницы, бумага

function roSciPa() {
    const userChoice = prompt('Камень, ножницы или бумага').toLowerCase();
    const choices = ['камень', 'ножницы', 'бумага'];
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (!choices.includes(userChoice)) {
        alert('Такого не существует');
        return;
    }

if (userChoice === compChoice) {
result = 'Ничья';
}

else if (
    (userChoice === 'камень' && compChoice === 'ножницы') ||
    (userChoice === 'ножницы' && compChoice === 'бумага') ||
    (userChoice === 'бумага' && compChoice === 'камень') 
)
{
result = 'Вы победили';
}
else {
result = 'Вы проиграли';
}
alert(`У вас ${userChoice}, выбор компьютера: ${compChoice}, ${result}`);
}























// Викторина

function simpleQuiz() {
const quiz = [
    {
        question: "Примерная скорость света в вакууме?",
        options: ['1. 5000 км/ч, 2. 60000 км/мин, 3. 300000км/с'],
        correctAnswer: 3
    },
    {
        question: "Какая минимальная длина во вселенной?",
        options: ["1. Планковская, 2. Нанометр, 3. Миллиметр"],
        correctAnswer: 1
    },
    {
        question: "Какая скорость вращения Земли?",
        options: ['1. 450км/ч, 2. 450км/с, 3. 450м/с'],
        correctAnswer: 3
    },
];

let score = 0;
for (let i = 0; i < quiz.length; i++) {
    const questionText = quiz[i].question + quiz[i].options.join('');
    const userAnswer = +prompt(questionText);
    if (userAnswer === quiz[i].correctAnswer) {
        score++;
    }
}
alert(`Вы набрали ${score} из 3 баллов`);
}









// Переверни текст

function reverseText() {
    const task = prompt('Переверни текст');
    if (task) {
        const reversed = task.split('').reverse().join('');
        alert(`${reversed}`);
    }
    else {
        alert('Вы ввели не текст')
    }
}










/* Простая арифметика */

function randNums() {
    const operators = ["+", "-", "*", "/"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let a, b, result;  
    let userAnswer = (operator, a, b);

    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    switch(operator) {
            case '+':
            userAnswer = +prompt(`Сложите ${a} и ${b}`);
            result = a + b;
            break;

            case '-':
            userAnswer = +prompt(`Вычтите ${b} от ${a}`);
            result = a - b;
            break;

            case '*':
            userAnswer = +prompt(`Умножьте ${a} на ${b}`);
            result = a * b;
            break;

            case '/':
            userAnswer = parseFloat(prompt(`Разделите ${b} на ${a}`));
            result = parseFloat((b / a).toFixed(2));
            break;
    }
    
    
        if (userAnswer === result) {
            alert('Верно');
        }
        else {
            alert('Неверно');
        }
}


    
        
    




/* Игра Угадай число */

function guessNumber() {

    const number = Math.floor(Math.random() * 100) + 1;

    let answer = parseInt(prompt('Угадай число от 1 до 100'));

    if (answer === number) {
        alert('Вы угадали');
    }
    else if (answer <= number) {
        alert('Ваше число меньше');
    } 
    else {
        alert('Ваше число больше');
    }
} 