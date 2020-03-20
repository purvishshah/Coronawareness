const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this===firstCard) return;
    this.classList.toggle('flip');

    if(!hasFlippedCard) {
        //first click
        hasFlippedCard=true;
        firstCard = this;
    }
    else {
        hasFlippedCard = false;
    secondCard = this;
    checkForMatch();
    }
}

function checkForMatch() {


    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        if(firstCard.dataset.framework === "one") { };
        disabledCards();
        
    }
    else {
        unflippedCards();
    }
}

function disabledCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click' , flipCard);
    resetBoard();

}

function unflippedCards() {
    lockBoard = true;
    setTimeout(() => { 
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
    resetBoard();

}, 1800);

}

function resetBoard() {
    [hasFlippedCard , lockBoard] = [false, false];
    [firstCard , secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()*12)
        card.style.order = randomPos;

    });
})();

cards.forEach( card => card.addEventListener('click', flipCard))
;
