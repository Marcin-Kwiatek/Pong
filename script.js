let motionTop = 2
let motionLeft = 2

function motionBall() {
    let ball = document.getElementById("ball")
    let ballPositionTop = parseInt(ball.style.top)
    let ballPositionLeft = parseInt(ball.style.left)
    if (ballPositionTop >= 480) {
        motionTop = - motionTop
    }
    if (ballPositionLeft >= 680){
        motionLeft = - motionLeft
    }
    if (ballPositionTop <= 0) {
        motionTop = - motionTop
    }
    if (ballPositionLeft <= 0) {
        motionLeft = - motionLeft
    }
    ball.style.top = ballPositionTop + motionTop + "px"
    ball.style.left = ballPositionLeft + motionLeft + "px"
}

window.setInterval(motionBall, 20)
window.addEventListener("keydown", racketMotion)

function racketMotion(event) {
    let racket = document.getElementById("racket")
    let racketPosition = parseInt(racket.style.top)
    if (event.keyCode == '38' && racketPosition>0) {
        racket.style.top = racketPosition - 20 + "px"
    }
    if (event.keyCode == '40' && racketPosition<460) {
        racket.style.top = racketPosition + 20 + "px"
    }
}


