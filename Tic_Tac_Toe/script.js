let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
let turn = document.getElementById("turn");

let winningPattern = [
    [0, 1, 2],   // Top row
    [3, 4, 5],   // Middle row
    [6, 7, 8],   // Bottom row
    [0, 3, 6],   // Left column
    [1, 4, 7],   // Middle column
    [2, 5, 8],   // Right column
    [0, 4, 8],   // Diagonal from top-left to bottom-right
    [2, 4, 6]    // Diagonal from top-right to bottom-left
];

let xTurn = true;
let count = 0;
let xMoves = [];
let oMoves = [];

turn.innerHTML = "X's turn";

const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    popupRef.classList.remove("hide");
};

const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    popupRef.classList.add("hide");
};

const winFunction = (letter) => {
    disableButtons();
    if (letter === "X") {
        msgRef.innerHTML = "&#x1F389; 'X' Wins!";
    } else {
        msgRef.innerHTML = "&#x1F389; 'O' Wins!";
    }
};

const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; It's a Draw!";
};

const checkWin = (moves) => {
    for (let pattern of winningPattern) {
        let [pos1, pos2, pos3] = pattern;
        if (moves.includes(pos1) && moves.includes(pos2) && moves.includes(pos3)) {
            return true;
        }
    }
    return false;
};

const updateMoves = (player, move) => {
    if (player === "X") {
        xMoves.push(move);
        if (xMoves.length > 3) {
            let oldestMove = xMoves.shift();
            btnRef[oldestMove].innerText = "";
        }
        if (checkWin(xMoves)) {
            winFunction("X");
        }
    } else if (player === "O") {
        oMoves.push(move);
        if (oMoves.length > 3) {
            let oldestMove = oMoves.shift();
            btnRef[oldestMove].innerText = "";
        }
        if (checkWin(oMoves)) {
            winFunction("O");
        }
    }
};

const checkDraw = () => {
    return count === 9 && !checkWin(xMoves) && !checkWin(oMoves);
};

const restartGame = () => {
    count = 0;
    xMoves = [];
    oMoves = [];
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    turn.innerHTML = "X's turn";
    msgRef.innerHTML = "Sample Message";
};

newgameBtn.addEventListener("click", () => {
    restartGame();
});

restartBtn.addEventListener("click", () => {
    restartGame();
});

btnRef.forEach((element, index) => {
    element.addEventListener("click", () => {
        if (element.innerText === "") {
            if (xTurn) {
                turn.innerHTML = "O's turn";
                element.innerText = "X";
                updateMoves("X", index);
            } else {
                turn.innerHTML = "X's turn";
                element.innerText = "O";
                updateMoves("O", index);
            }
            element.disabled = true;
            count += 1;
            xTurn = !xTurn;

            if (checkDraw()) {
                drawFunction();
            }
        }
    });
});

window.onload = enableButtons;
