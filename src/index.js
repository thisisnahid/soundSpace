const Game = require("./lib/game");

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let playerHeight = 30;
    let playerWidth = 26;
    let playerX = 30;
    let playerY = 300;


    function drawImage(url, x, y, width, height) {
        const image = new Image();
        image.src = url;
        image.onload = function() {
            ctx.drawImage(image, x, y, width, height),
            ctx.drawImage(image, x, y, width, height),
            ctx.drawImage(image, x, y, width, height),
            ctx.drawImage(image, x, y, width, height)
        }
    }
        
    let rightPressed = false;
    let leftPressed = false;
    let upPressed = false;
    let downPressed = false;

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        if (e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if (e.key == "ArrowLeft") {
            leftPressed = true;
        } 
        else if (e.key == "ArrowUp") {
            upPressed = true;
        }
        else if (e.key == "ArrowDown") {
            downPressed = true;
        }
    }

    function keyUpHandler(e) {
        if (e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if (e.key == "ArrowLeft") {
            leftPressed = false;
        }
        else if (e.key == "ArrowUp") {
            upPressed = false;
        }
        else if (e.key == "ArrowDown") {
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

    const audio1 = document.getElementById('audio1');
    const audio2 = document.getElementById('audio2');
    const audio3 = document.getElementById('audio3');
    const audio4 = document.getElementById('audio4');
    const audio5 = document.getElementById('audio5');

    function handlePlay(audio) {
        if (!audio.paused) {
            audio.pause()
        } else {
            audio.play()
        }
    }


    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // drawImage("src/images/rocket.png", playerX-30, playerY-25, 50, 40)
        drawImage("src/images/orb.png", playerX-30, playerY-30, 57, 60)
        drawImage("src/images/yellow.png", 200, 300, 20, 25);
        drawImage("src/images/blue.png", 310, 260, 20, 25);
        drawImage("src/images/green.png", 420, 160, 20, 25);
        drawImage("src/images/purple.png", 540, 220, 20, 25);
        drawImage("src/images/pink.png", 660, 275, 20, 25);

        if (rightPressed) {
            playerX += 5;
            if (playerX + playerHeight > canvas.width) {
                playerX = canvas.width - playerHeight;
            } else if ((playerX + playerHeight > 190) 
                        && (playerX + playerHeight < 220)
                        && (playerY + playerHeight > 300)
                        && (playerY + playerHeight < 384)) 
                        {
                    handlePlay(audio1); 
                playerX = 170;
            } else if ((playerX + playerHeight > 300)
                        && (playerX + playerHeight < 330)
                        && (playerY + playerHeight > 260)
                        && (playerY + playerHeight < 344)) 
                        {
                        handlePlay(audio3);
                        playerX = 280;
            } else if ((playerX + playerHeight > 410)
                        && (playerX + playerHeight < 440)
                        && (playerY + playerHeight > 160)
                        && (playerY + playerHeight < 244)) {
                    handlePlay(audio2);
                    playerX = 390;
            } else if ((playerX + playerHeight > 530)
                        && (playerX + playerHeight < 560)
                        && (playerY + playerHeight > 220)
                        && (playerY + playerHeight < 304)) {
                handlePlay(audio4);
                        playerX = 510;
            } else if ((playerX + playerHeight > 650)
                        && (playerX + playerHeight < 680)
                        && (playerY + playerHeight > 275)
                        && (playerY + playerHeight < 359)) {
                handlePlay(audio5); 
                        playerX = 630;
            }
        }
        else if (leftPressed) {
            playerX -= 5;
            if (playerX < 30) {
                playerX = 30;
            } else if ((playerX + playerHeight > 230)
                && (playerX + playerHeight < 290)
                && (playerY + playerHeight > 300)
                && (playerY + playerHeight < 384)) 
                {
                handlePlay(audio1);
                playerX = 250;
            } 
            else if ((playerX + playerHeight > 340)
                && (playerX + playerHeight < 400)
                && (playerY + playerHeight > 260)
                && (playerY + playerHeight < 344)) {
                handlePlay(audio3);
                playerX = 360;
            } 
            else if ((playerX + playerHeight > 450)
                && (playerX + playerHeight < 510)
                && (playerY + playerHeight > 160)
                && (playerY + playerHeight < 244)) {
                handlePlay(audio2);
                playerX = 470;
            } 
            else if ((playerX + playerHeight > 570)
                && (playerX + playerHeight < 630)
                && (playerY + playerHeight > 220)
                && (playerY + playerHeight < 304)) {
                handlePlay(audio4);
                playerX = 590;
            } else if ((playerX + playerHeight > 690)
                && (playerX + playerHeight < 750)
                && (playerY + playerHeight > 275)
                && (playerY + playerHeight < 359)) {
                handlePlay(audio5);
                playerX = 710;
            }
        }
        else if (upPressed) {
            playerY -= 5;
            
            if (playerY < 30) {
                playerY = 30;
            } else if ((playerY + playerHeight > 315)
                && (playerY + playerHeight < 390)
                && (playerX + playerHeight > 200)
                && (playerX + playerHeight < 274)) {
                handlePlay(audio1);
                playerY = 355;
            } else if ((playerY + playerHeight > 275)
                && (playerY + playerHeight < 350)
                && (playerX + playerHeight > 310)
                && (playerX + playerHeight < 390)) {
                handlePlay(audio3);
                playerY = 315;
            } else if ((playerY + playerHeight > 175)
                && (playerY + playerHeight < 250)
                && (playerX + playerHeight > 420)
                && (playerX + playerHeight < 500)) {
                handlePlay(audio2);
                playerY = 215;
            } else if ((playerY + playerHeight > 185)
                && (playerY + playerHeight < 320)
                && (playerX + playerHeight > 540)
                && (playerX + playerHeight < 620)) {
                handlePlay(audio4);
                playerY = 275;
            } else if ((playerY + playerHeight > 280)
                && (playerY + playerHeight < 365)
                && (playerX + playerHeight > 660)
                && (playerX + playerHeight < 740)) {
                handlePlay(audio5);
                playerY = 330;
            }
        }
        else if (downPressed) {
            playerY += 5;
            if (playerY + playerHeight > canvas.height) {
                playerY = (canvas.height) - playerHeight;
            } else if ((playerY + playerHeight > 290)
                        && (playerY + playerHeight < 320)
                        && (playerX + playerHeight > 200)
                        && (playerX + playerHeight < 274)) 
                        {
                handlePlay(audio1);
                playerY = 270;
            } else if ((playerY + playerHeight > 250)
                        && (playerY + playerHeight < 280)
                        && (playerX + playerHeight > 310)
                        && (playerX + playerHeight < 390)) {
                handlePlay(audio3);
                playerY = 230;
            } else if ((playerY + playerHeight > 150)
                        && (playerY + playerHeight < 180)
                        && (playerX + playerHeight > 420)
                        && (playerX + playerHeight < 500)) {
                        handlePlay(audio2);
                        playerY = 130;
            } else if ((playerY + playerHeight > 210)
                        && (playerY + playerHeight < 240)
                        && (playerX + playerHeight > 540)
                        && (playerX + playerHeight < 620)) {
                handlePlay(audio4);
                        playerY = 190;
            } else if ((playerY + playerHeight > 255)
                        && (playerY + playerHeight < 295)
                        && (playerX + playerHeight > 660)
                        && (playerX + playerHeight < 740)) {
                handlePlay(audio5);
                        playerY = 245;
            }
        }
    }

    


// drawImage("src/images/yellow.png", 200, 300, 20, 25);
// drawImage("src/images/blue.png", 310, 260, 20, 25);
// drawImage("src/images/green.png", 420, 160, 20, 25);
// drawImage("src/images/purple.png", 540, 220, 20, 25);
// drawImage("src/images/pink.png", 660, 275, 20, 25);
setInterval(draw, 20);






