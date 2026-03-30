const words = [
    { word: "apple", hint: "A common fruit" },
    { word: "java", hint: "A popular programming language" },
    { word: "ocean", hint: "Large body of water" },
    { word: "tiger", hint: "A wild cat" },
    { word: "school", hint: "A place where you study" }
];

let chosen = words[Math.floor(Math.random() * words.length)];
let guessed = Array(chosen.word.length).fill("_");
let lives = 6;

document.getElementById("hint").textContent = "Hint: " + chosen.hint;
document.getElementById("lives").textContent = "❤️ ".repeat(lives);
document.getElementById("word").textContent = guessed.join(" ");

function updateWord() {
    document.getElementById("word").textContent = guessed.join(" ");
}

function updateLives() {
    document.getElementById("lives").textContent = "❤️ ".repeat(lives);
}

function endGame(msg) {
    document.getElementById("message").textContent = msg;
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

function createButtons() {
    const container = document.getElementById("letters");
    for (let i = 65; i <= 90; i++) {
        let letter = String.fromCharCode(i).toLowerCase();
        let btn = document.createElement("button");
        btn.textContent = letter;
        btn.onclick = () => guess(letter, btn);
        container.appendChild(btn);
    }
}

function guess(letter, btn) {
    btn.disabled = true;
    if (chosen.word.includes(letter)) {
        for (let i = 0; i < chosen.word.length; i++) {
            if (chosen.word[i] === letter) guessed[i] = letter;
        }
        updateWord();
        if (!guessed.includes("_")) endGame("🎉 You Won!");
    } else {
        lives--;
        updateLives();
        if (lives === 0) endGame("You Lost! Word was: " + chosen.word);
    }
}

createButtons();