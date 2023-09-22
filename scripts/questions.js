// Questions
const questions = [
    {
        question: 'Who was the first Straw Hat to be shown in the anime?',
        answers: [
            { text: 'A) Luffy', correct: true },
            { text: 'B) Zoro', correct: false },
            { text: 'C) Nami', correct: false },
            { text: 'D) Usopp', correct: false }
        ]
    },
    {
        question: 'How old was Luffy pre-time skip?',
        answers: [
            { text: 'A) 16', correct: false },
            { text: 'B) 17', correct: true },
            { text: 'C) 18', correct: false },
            { text: 'D) 19', correct: false }
        ]
    },
    {
        question: 'Who was the first antagonist of One Piece?',
        answers: [
            { text: 'A) Alvida', correct: true },
            { text: 'B) Buggy', correct: false },
            { text: 'C) Kuro', correct: false },
            { text: 'D) Don Krieg', correct: false }
        ]
    },
    {
        question: 'What was the first ever named attack used by Luffy?',
        answers: [
            { text: 'A) Gum-Gum Bullet', correct: false },
            { text: 'B) Gum-Gum Rocket', correct: false },
            { text: 'C) Gum-Gum Gatling', correct: false },
            { text: 'D) Gum-Gum Pistol', correct: true }
        ]
    },
    {
        question: 'Where was Gol D. Roger executed?',
        answers: [
            { text: 'A) Raftel', correct: false },
            { text: 'B) Loguetown', correct: true },
            { text: 'C) Goa Kingdom', correct: false },
            { text: 'D) Gray Terminal', correct: false }
        ]
    },
    {
        question: 'Who was the first Warlord of the sea to be introduced?',
        answers: [
            { text: 'A) Dracule Mihawk', correct: false },
            { text: 'B) Jimbei', correct: false },
            { text: 'C) Crocodile', correct: true },
            { text: 'D) Blackbeard', correct: false }
        ]
    },
    {
        question: 'What is the name of the Straw Hats\' first ship?',
        answers: [
            { text: 'A) Going Merry', correct: true },
            { text: 'B) Merry Go', correct: false },
            { text: 'C) Merry', correct: false },
            { text: 'D) Thousand Sunny', correct: false }
        ]
    },
    {
        question: 'How many berries did Nami have to gather for Arlong, in order to free Cocoyasi Village?',
        answers: [
            { text: 'A) 100,000 Berries', correct: false },
            { text: 'B) 1,000,000 Berries', correct: false },
            { text: 'C) 10,000,000 Berries', correct: false },
            { text: 'D) 100,000,000 Berries', correct: true }
        ]
    },
    {
        question: 'Which devil fruit was the first to appear after Luffy\'s?',
        answers: [
            { text: 'A) Slip-Slip Fruit', correct: false },
            { text: 'B) Boom-Boom Fruit', correct: true },
            { text: 'C) Dice-Dice Fruit', correct: false },
            { text: 'D) Chop-Chop Fruit', correct: false }
        ]
    },
    {
        question: 'What was Luffy\'s first bounty?',
        answers: [
            { text: 'A) 15,000,000 Berries', correct: false },
            { text: 'B) 30,000,000 Berries', correct: true },
            { text: 'C) 20,000,000 Berries', correct: false },
            { text: 'D) 40,000,000 Berries', correct: false }
        ]
    }
];

// Assign variables
const quizSection = document.querySelector('.quiz');
let score = 0;
let questionNumber = 0;
let completedQuesitons = []

// Assign through DOM
const questionContainer = document.getElementById("question");
const scoreContainer = document.getElementById("score");
