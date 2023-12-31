const input = document.querySelector('input');
const restartButton = document.getElementById('restart');
const result = document.getElementById('result');

const gameLogic = () => {
    if (input.value == computerPick()) {
        result.innerText = `
        ¡Has salvado el mundo!
        `;
    } else {
        result.innerText = `La bomba ha explotado.`;
    };
}

const computerPick = () => Math.floor(Math.random() * 3) + 1;

const startGame = () => {

    input.addEventListener('input', () => {
        setTimeout(function () {
            gameLogic();
        }, 5000);

    })
};

const reStartGame = () => {
    restartButton.addEventListener('click', () => {
        result.innerText = '';
        input.value = '';
    });
};

startGame();
reStartGame();
