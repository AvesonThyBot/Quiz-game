// Questions
const questions = [
    {
        numb: 1,
        question: 'Who was the first Straw Hat to be shown in the anime?',
        answer: 'A) Luffy',
        options: [
            'A) Luffy',
            'B) Zoro',
            'C) Nami',
            'D) Usopp'
        ]
    },
    {
        numb: 2,
        question: 'How old was Luffy pre-time skip?',
        answer: 'B) 17',
        options: [
            'A) 16',
            'B) 17',
            'C) 18',
            'D) 19'
        ]
    },
    {
        numb: 3,
        question: 'Who was the first antagonist of One Piece?',
        answer: 'A) Alvida',
        options: [
            'A) Alvida',
            'B) Buggy',
            'C) Kuro',
            'D) Don Krieg'
        ]
    },
    {
        numb: 4,
        question: 'What was the first ever named attack used by Luffy?',
        answer: 'D) Gum-Gum Pistol',
        options: [
            'A) Gum-Gum Bullet',
            'B) Gum-Gum Rocket',
            'C) Gum-Gum Gatling',
            'D) Gum-Gum Pistol'
        ]
    },
    {
        numb: 5,
        question: 'Where was Gol D. Roger executed?',
        answer: 'B) Loguetown',
        options: [
            'A) Raftel',
            'B) Loguetown',
            'C) Goa Kingdom',
            'D) Gray Terminal'
        ]
    },
    {
        numb: 6,
        question: 'Who was the first Warlord of the sea to be introduced?',
        answer: 'C) Crocodile',
        options: [
            'A) Dracule Mihawk',
            'B) Jimbei',
            'C) Crocodile',
            'D) Blackbeard'
        ]
    },
    {
        numb: 7,
        question: 'What is the name of the Straw Hats\' first ship?',
        answer: 'A) Going Merry',
        options: [
            'A) Going Merry',
            'B) Merry Go',
            'C) Merry',
            'D) Thousand Sunny'
        ]
    },
    {
        numb: 8,
        question: 'How many berries did Nami have to gather for Arlong, in order to free Cocoyasi Village?',
        answer: 'D) 100,000,000 Berries',
        options: [
            'A) 100,000 Berries',
            'B) 1,000,000 Berries',
            'C) 10,000,000 Berries',
            'D) 100,000,000 Berries'
        ]
    },
    {
        numb: 9,
        question: 'Which devil fruit was the first to appear after Luffy\'s?',
        answer: 'B) Boom-Boom Fruit',
        options: [
            'A) Slip-Slip Fruit',
            'B) Boom-Boom Fruit',
            'C) Dice-Dice Fruit',
            'D) Chop-Chop Fruit'
        ]
    },
    {
        numb: 10,
        question: 'What was Luffy\'s first bounty?',
        answer: 'B) 30,000,000 Berries',
        options: [
            'A) 15,000,000 Berries',
            'B) 30,000,000 Berries',
            'C) 20,000,000 Berries',
            'D) 40,000,000 Berries'
        ]
    }
];

// Assign through DOM
const timer = document.querySelector(".timer"); // Timer
const nextBtn = document.querySelector(".next-btn"); // Next button
const optionList = document.querySelector(".option-list"); //Option list

// Assign variables
let score = 0; 
let questionCount = 0;
let questionNumb = 1;


// Next button function
nextBtn.onclick= () => {
    if (questionCount<questions.length-1){
    questionCount++;
    showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
        nextBtn.classList.remove('active')
    }
    else{
        console.log('Question Completed!');
    }
} 


// Getting questions & answers and assigning
function showQuestions(index){
    const questionText = document.querySelector('.question-text');
    questionText.textContent=`${questions[index].numb}) ${questions[index].question}`;
    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;
    optionList.innerHTML = optionTag
    const option = document.querySelectorAll('.option');
    for(let i = 0; i<option.length; i++){
        option[i].setAttribute('onclick','optionSelected(this)');
    }
}

// option selected
function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer == correctAnswer){
        answer.classList.add('correct');
        // add score
        score++;
        headerscore()
    }
    else{
        answer.classList.add('incorrect'); 
        // show correct answer
        for(let i = 0; i < allOptions; i++){
           if (optionList.children[i].textContent==correctAnswer){
            optionList.children[i].setAttribute('class','option correct');
           }
        }

    }
    // disable choices after selection
    for(let i = 0; i < allOptions; i++){
        optionList.children[i].classList.add('disabled')
    }
    nextBtn.classList.add('active');
}

// Question counter
function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length}`
}

function headerscore(){
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `${score}/${questions.length}`
    
}


showQuestions(0)
questionCounter(1)
headerscore()