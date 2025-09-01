score = 0;
cross = true;

audiogo = new Audio("gameover.mp3")
audio = new Audio("music.mp3")
setTimeout(() => {
    audio.play();
}, 1000)
document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(() => {
            dino.classList.remove("animateDino");
        }, 700)
    }
    if (e.keyCode == 39) {
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = (dinoX + 112) + "px";
        dino.classList.remove("flipped");
    }
    if (e.keyCode == 37) {
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = (dinoX - 112) + "px";
        dino.classList.add("flipped");
    }
}

setInterval(() => {
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");
    //getting the left value pxs of dino and obstacle
    //getting the bottom value pxs of dino and obstacle

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));
    //AGR DINO AUR OBSTACLE KA dx AND dy VALUE MATCH KR GYA MTLB WO DONO TKRA RAHA HAI AUR  TBHI GAME OVER HO JAYEGA
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over! Reload to start";
        obstacle.classList.remove("obstacleAni");
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000)
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"));
            newDur = aniDur - 0.2;
            obstacle.style.animationDuration = newDur + "s";
        }, 500)
    }
}, 10)
function updateScore(score) {
    scoreCont.innerHTML = "Your Score = " + score;
}