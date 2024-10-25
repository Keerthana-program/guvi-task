const images = [
    'image/angary.jpg',
    'image/anxiety.jpg',
    'image/fear.jpg',
    'image/joy.jpg',
    'image/sad.jpg',
    'image/shy.jpg',
    'image/angary.jpg',
    'image/anxiety.jpg',
    'image/fear.jpg',
    'image/joy.jpg',
    'image/sad.jpg',
    'image/shy.jpg'
];

let firstCard, secondCard;
let lockBoard = false;
let moves = 0;
let timerInterval;
let seconds = 0;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    const gameContainer = document.querySelector('.game-container');
    shuffle(images);
    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-inner">
                <div class="front"><img src="image/download.jpg"></div>
                <div class="back"><img src="${image}" alt="img"></div>
            </div>
        `;
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    moves++;
    document.querySelector('.moves span').innerText = moves;

    if (firstCard.querySelector('.back img').src === secondCard.querySelector('.back img').src) {
        resetCards();
        checkWin();
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetCards();
        }, 1000);
    }
}

function resetCards() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function checkWin() {
    const allCards = document.querySelectorAll('.card');
    const flippedCards = Array.from(allCards).filter(card => card.classList.contains('flipped'));
    if (flippedCards.length === allCards.length) {
        clearInterval(timerInterval);
        alert('Congratulations! You found all pairs!');
    }
}

function startGame() {
    const movesDisplay = document.querySelector('.moves span');
    const timerDisplay = document.querySelector('.timer span');
    moves = 0;
    seconds = 0;
    movesDisplay.innerText = moves;

    const gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = ''; // Clear existing cards
    createBoard();

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const displaySeconds = seconds % 60;
        timerDisplay.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${displaySeconds < 10 ? '0' : ''}${displaySeconds}`;
    }, 1000);
}

document.querySelector('.start').addEventListener('click', startGame);
