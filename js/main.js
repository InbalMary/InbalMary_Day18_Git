'use strict'

var gSize = 100

function onBallClick(elBall){
    var color = getRandomColor()
    gSize += getRandomIntInclusive(20, 60)

    if(gSize > 400){
        gSize = 100
    }
    console.log(elBall)
    elBall.style.height = gSize + 'px'
    elBall.style.width = gSize + 'px'
    elBall.innerText = gSize
    elBall.style.backgroundColor = color
    // console.log('Hello', elBall.style.width)
}