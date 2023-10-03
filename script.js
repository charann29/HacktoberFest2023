const gameBoard = document.querySelector(".game-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let targetX, targetY;
let snakeX = 5, snakeY = 5;
let speedX = 0, speedY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

// Get high score from localStorage API or set to 0 if not available
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

// Function to update the position of the target (food)
const updateTargetPosition = () => {
    // Random positions (x, y) generated for target
    // x, y values range from 1 to 30 since it's a 30x30 grid
    targetX = Math.floor(Math.random() * 30) + 1;
    targetY = Math.floor(Math.random() * 30) + 1;
};

// Function to handle game over condition
const handleGameOver = () => {
    // Clear the interval, show alert, and reload the page
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay");
    location.reload();
};

// Function to change the direction of the snake based on the key pressed
const changeDirection = d => {
    if (d.key === "ArrowUp" && speedY !== 1) {
        speedX = 0;
        speedY = -1;
    } else if (d.key === "ArrowDown" && speedY !== -1) {
        speedX = 0;
        speedY = 1;
    } else if (d.key === "ArrowLeft" && speedX !== 1) {
        speedX = -1;
        speedY = 0;
    } else if (d.key === "ArrowRight" && speedX !== -1) {
        speedX = 1;
        speedY = 0;
    }
};
