'use strict'

var gSize = 100

function onBallClick(elBall){
    gSize += 50

    if(gSize > 400){
        gSize = 100
    }
    console.log(elBall)
    elBall.style.height = gSize + 'px'
    elBall.style.width = gSize + 'px'
    elBall.innerText = gSize
    // console.log('Hello', elBall.style.width)
}