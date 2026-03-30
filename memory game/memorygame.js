const gameContainer = document.querySelector(".game-container");

const ids = [];
for (let i = 1; i <= 16; i++) {
    ids.push("c" + i);
}

const symbols = ["🌍","🌍","🌿","🌿","🦌","🦌","🌙","🌙","🪨","🪨","💧","💧","🌸","🌸","🪵","🪵"];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(symbols);

let cardValues = {};
ids.forEach((id, index) => {
    const value = symbols[index];
    const card = document.createElement("div");

    card.className = "card";
    card.id = id;
    cardValues[id] = value;

    card.innerHTML = `
        <div class="face back"></div>
        <div class="face front">${value}</div>
    `;

    card.onclick = () => flipCard(card);

    gameContainer.appendChild(card);
});


let firstCard = null;
let secondCard = null;
let boardLocked = false;

function flipCard(card) {
    if (boardLocked) return;
    if (card.classList.contains("flipped")) return;

    card.classList.add("flipped");

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    boardLocked = true;

    checkMatch();
}

function checkMatch() {
    const match = cardValues[firstCard.id] === cardValues[secondCard.id];

    if (match) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        reset();
    } else {
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            reset();
        }, 1000);
    }
}

function reset() {
    firstCard = null;
    secondCard = null;
    boardLocked = false;
}
