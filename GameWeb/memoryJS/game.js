const symbols = ['★', '♦', '♥', '♠', '♣', '▲', '●', '■', '☀', '☁', '☂', '☃', '♫', '✿', '⚽', '☕', '☘', '☢', '☣', '⚡', '✈', '☂', '✉', '✒', '✏'];
const gameBoard = document.querySelector('.game-board');
const movesDisplay = document.getElementById('moves');
const pairsDisplay = document.getElementById('pairs');
const restartBtn = document.getElementById('restart-btn');

let cards = [];
let flippedCards = [];
let moves = 0;
let pairsFound = 0;
let canFlip = true;

// Déclarez une variable globale pour le nombre de paires (entre 2 et 25 par exemple)
let numPairs = 8; // valeur par défaut

function createBoard() {
    // Choisit aléatoirement numPairs symboles uniques à partir du tableau complet
    const symbolsCopy = [...symbols];
    const selectedSymbols = [];
    for (let i = 0; i < numPairs; i++) {
        const randIndex = Math.floor(Math.random() * symbolsCopy.length);
        selectedSymbols.push(symbolsCopy.splice(randIndex, 1)[0]);
    }
    const duplicatedSymbols = [...selectedSymbols, ...selectedSymbols];
    const shuffledSymbols = duplicatedSymbols.sort(() => Math.random() - 0.5);
    
    gameBoard.innerHTML = '';
    cards = [];
    flippedCards = [];
    moves = 0;
    pairsFound = 0;
    canFlip = true;
    
    movesDisplay.textContent = moves;
    pairsDisplay.textContent = pairsFound;

    shuffledSymbols.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.dataset.index = index;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
        cards.push(card);
    });
}

function flipCard() {
    if (!canFlip || flippedCards.includes(this) || this.classList.contains('flipped')) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        moves++;
        movesDisplay.textContent = moves;
        canFlip = false;

        if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
            pairsFound++;
            // Affiche "pairsFound/numPairs"
            pairsDisplay.textContent = `${pairsFound}/${numPairs}`;
            flippedCards = [];
            canFlip = true;

            // Vérifie la victoire lorsque le nombre de paires trouvées atteint numPairs
            if (pairsFound === numPairs) {
                setTimeout(showWinPopup, 500);
            }
        } else {
            setTimeout(() => {
                flippedCards.forEach(card => {
                    card.classList.remove('flipped');
                });
                flippedCards = [];
                canFlip = true;
            }, 1000);
        }
    }
}

function showWinPopup() {
    // Supprime un éventuel popup existant
    const existingPopup = document.querySelector('.popup');
    if (existingPopup) existingPopup.remove();

    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
      <div class="popup-content">
          <h2>Félicitations !</h2>
          <p>Vous avez gagné en ${moves} coups.</p>
          <button id="restartGame">Rejouer</button>
      </div>
    `;
    document.body.appendChild(popup);

    const restartGameBtn = document.getElementById('restartGame');
    restartGameBtn.addEventListener('click', () => {
        popup.remove();
        createBoard();
    });
}

function showMemorySetupPopup() {
    // Supprime un éventuel popup existant
    const existingPopup = document.querySelector('.popup');
    if (existingPopup) existingPopup.remove();

    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
      <div class="popup-content">
          <h2>Choisissez le nombre de paires</h2>
          <div class="form-group">
              <label for="pairCount">Nombre de paires (2-${symbols.length}):</label>
              <input type="number" id="pairCount" min="2" max="${symbols.length}" value="8">
          </div>
          <button id="startGame">Démarrer</button>
      </div>
    `;
    document.body.appendChild(popup);

    const startBtn = document.getElementById('startGame');
    startBtn.addEventListener('click', () => {
        const input = document.getElementById('pairCount');
        const pairCount = parseInt(input.value, 10);
        if (isNaN(pairCount) || pairCount < 2 || pairCount > symbols.length) {
            alert(`Veuillez saisir un nombre valide entre 2 et ${symbols.length}`);
            return;
        }
        numPairs = pairCount;
        popup.remove();
        createBoard();
    });
}

window.addEventListener('load', showMemorySetupPopup);

// Supprimez ou commentez l'appel direct à createBoard() existant
// createBoard();

restartBtn.addEventListener('click', createBoard);