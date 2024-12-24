'use strict'

var gSize = 100

function onBallClick(elBall, maxDiameter) {
    var color = getRandomColor()
    gSize += getRandomIntInclusive(20, 60)

    if (gSize > maxDiameter) gSize = 100

    console.log(elBall)
    elBall.style.height = gSize + 'px'
    elBall.style.width = gSize + 'px'
    elBall.innerText = gSize
    elBall.style.backgroundColor = color
    // console.log('Hello', elBall.style.width)
}

function onBall3Click() {
    var elBall1 = document.querySelector('.ball1')
    var elBall2 = document.querySelector('.ball2')

    var color1 = elBall1.style.backgroundColor
    var color2 = elBall2.style.backgroundColor

    var size1 = elBall1.style.height
    var size2 = elBall2.style.height

    console.log(elBall1, color1, color2)
    elBall1.style.backgroundColor = color2
    elBall2.style.backgroundColor = color1

    elBall1.style.height = size2
    elBall1.style.width = size2
    elBall2.style.height = size1
    elBall2.style.width = size1
}