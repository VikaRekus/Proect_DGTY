const quizData = [
    {
        question: "Вопрос 1: Как вы оцениваете свое самочувствие?",
        a: "Нормально",
        b: "Немного устал(а)",
        c: "Отлично! Готов(а) работать",
        d: "Довольно плохо, очень устал(а)",
        one: "a",
        two: "b",
        three: "c",
        four: "d",
    },
    {
        question: "Вопрос 2: Как вы обычно справляетесь со стрессом?",
        a: "Больше сплю",
        b: "Занимаюсь своим любимым делом",
        c: "Общаюсь с друзьями и близкими",
        d: "Закрываюсь в себе",
        one: "a",
        two: "b",
        three: "c",
        four: "d",
    },
    {
        question: "Вопрос 3: В каких ситуациях вы, скорее всего, будете чувствовать себя неуверенно?",
        a: "Выступление перед большой аудиторией",
        b: "Общение с незнакомцами",
        c: "Принятие важных решений",
        d: "Работа в команде",
        one: "a",
        two: "b",
        three: "c",
        four: "d",
    },
    {
        question: "Вопрос 4: Какая обстановка подходит вам для работы?",
        a: "Тихая комната",
        b: "Место с больши количеством людей",
        c: "Место со средним уровнем шума",
        d: "Другое",
        one: "a",
        two: "b",
        three: "c",
        four: "d",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `
            <a href="main_teacher.html">
                <button onclick="location.reload()">Посмотреть результаты теста</button>
            </a>`;
        }
    }
});
