let motionTop = 20
let motionLeft = 20

function motionBall() {
    let ball = document.getElementById("ball")
    let ballPositionTop = parseInt(ball.style.top)
    let ballPositionLeft = parseInt(ball.style.left)
    if (ballPositionTop >= 480) {
        motionTop = -20
    }
    if (ballPositionLeft >= 680){
        motionLeft = -20
    }
    if (ballPositionTop <= 0) {
        motionTop = 20
    }
    if (ballPositionLeft <= 0) {
        motionLeft = 20
    }
    ball.style.top = ballPositionTop + motionTop + "px"
    ball.style.left = ballPositionLeft + motionLeft + "px"
}

window.setInterval(motionBall, 200)
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

