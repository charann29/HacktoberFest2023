

//game board
var blockSize=25;
var rows=20;
var cls=20;
var board;
var context;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var score = 0;
var highScore = localStorage.getItem("highscore") || 0;

//snake speed
var speedX = 0;
var speedY = 0;

var snakeBody = [];

//target 
var targetX;
var targetY;

var gameOver = false;

window.onload = function() {
    board=document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cls * blockSize;
    context = board.getContext("2d"); // to draw on the board

    placeTarget();
    document.addEventListener("keyup", changeDirection);
    //update();
    setInterval(update, 1000/10); // every 100 milliseconds it's going to run the update function
}

function update() {
    if(gameOver) {
        return;
    }
    context.fillStyle="grey";
    context.fillRect(0,0,board.width,board.height);

    context.fillStyle="#35155D";
    context.fillRect(targetX, targetY, blockSize, blockSize);

    if(snakeX == targetX && snakeY == targetY) {
        score+=1;
        if(score>highScore) {
            highScore=score;  //update highScore
            localStorage.setItem("highscore", highScore);
        }
        snakeBody.push([targetX,targetY])
        placeTarget();
    }

    for(let i = snakeBody.length-1;i>0;i--) {
        snakeBody[i]=snakeBody[i-1];
    }
    if(snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="pink";
    snakeX += speedX*blockSize;
    snakeY += speedY*blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for(let i = 0;i<snakeBody.length;i++)
    {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize,blockSize);
    }
    
    //game over conditions
    if(snakeX<0 || snakeX>cls*blockSize || snakeY<0 || snakeY > rows*blockSize) {
        gameOver = true;
        alert("game over");
    }

    for(let i = 0;i<snakeBody.length;i++)
    {
        if(snakeX==snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("game over");
        }
    }

    document.getElementById("score").textContent= score;
    document.getElementById("highscore").textContent=highScore;
}

function changeDirection(e) {
    if(e.code=="ArrowUp" && speedY!=1) {
        speedX = 0;
        speedY = -1;
    }
    else if(e.code=="ArrowDown" && speedY!=-1) {
        speedX = 0;
        speedY = 1;
    }
    else if (e.code=="ArrowLeft" && speedX!=1) {
        speedX = -1;
        speedY = 0;
    }
    else if (e.code=="ArrowRight" && speedX!=-1) {
        speedX = 1;
        speedY = 0;
    }
}

function placeTarget() {

    targetX = Math.floor(Math.random() * cls) * blockSize;
    targetY = Math.floor(Math.random() * rows) * blockSize;
}
