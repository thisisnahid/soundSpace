import game from "./lib/game";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let playerHeight = 30;
let playerWidth = 26;
let playerX = 30;
let playerY = 423;

function drawFloor() {
    const floor = ctx.fillRect(0, 453, 1000, 1000);
    const e = ctx.fillRect(200, 300, 20, 25);
    const a = ctx.fillRect(310, 260, 20, 25);
    // floor.fillStyle = "#000"
}
function drawplayer() {
    ctx.beginPath();
    
    ctx.arc(
        playerX,
        playerY,
        playerHeight,
        0,
        2 * Math.PI,
        false
        );
        
        // ctx.rect(playerX, playerY, playerWidth, playerHeight);
        ctx.fillStyle = "#FFF";
        ctx.fill();
        ctx.closePath();
    }
    
    let rightPressed = false;
    let leftPressed = false;
    let upPressed = false;
    let downPressed = false;
    
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    
    function keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
        } 
        else if (e.key == "Up" || e.key == "ArrowUp") {
            upPressed = true;
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            downPressed = true;
        }
    }
    
    function keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
        else if (e.key == "Up" || e.key == "ArrowUp") {
            upPressed = false;
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            downPressed = false;
        }
    }

    
const audio = document.getElementById('audio');
const audioControls = document.getElementsByClassName("audio-controls")[0];
const audioPlay = document.getElementById('audio-play');
const audioPause = document.getElementById('audio-pause');



audioControls.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        audioPause.classList.remove('hidden');
        audioPlay.classList.add('hidden');
    } else {
        audio.pause();
        audioPlay.classList.remove('hidden');
        audioPause.classList.add('hidden');
    }
})


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFloor();
    drawplayer();

    if (rightPressed) {
        playerX += 5;
        if (playerX + playerHeight > canvas.width) {
            playerX = canvas.width - playerHeight;
        }
    }
    else if (leftPressed) {
        playerX -= 5;
        if (playerX < 30) {
            playerX = 30;
        }
    }
    else if (upPressed) {
        playerY -= 5;
        
        if (playerY < 30) {
            playerY = 30;
        }
    }
    else if (downPressed) {
        playerY += 5;
        if (playerY + playerHeight > canvas.height - 147) {
            playerY = (canvas.height - 147) - playerHeight;
        }
    
    }
}

setInterval(draw, 20);



