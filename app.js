

import { score, generateThrow } from './games.js';

const audio = document.getElementById('audio');


const rockButton = document.getElementById('rock');
const resultsButton = document.getElementById('results');
rockButton.addEventListener('click', () => {
    const computer = generateThrow();
    const player = rockButton.id;
    const newResult = score(player, computer);
    resultsButton.textContent = newResult;
    audio.src = 'assets/ROCK.wav';
    audio.play();
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => {
    const computer = generateThrow();
    const player = paperButton.id;
    const newResult = score(player, computer);
    resultsButton.textContent = newResult;
    audio.src = 'assets/paper.wav';
    audio.play();
});
const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => {
    const computer = generateThrow();
    const player = scissorsButton.id;
    const newResult = score(player, computer);
    resultsButton.textContent = newResult;
    audio.src = 'assets/scissors.wav';
    audio.play();
});

 