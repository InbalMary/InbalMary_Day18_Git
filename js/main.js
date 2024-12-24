'use strict'

var gSize = 100
var gOrig1Color = 'aquamarine'
var gOrig2Color = 'purple'

var gHoverTimeout
var gEnterCounter = 0

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
    elBall1.innerText = size2
    elBall2.style.height = size1
    elBall2.style.width = size1
    elBall2.innerText = size1
}

function onBall4Click() {
    var rand = getRandomIntInclusive(20, 60)

    var elBall1 = document.querySelector('.ball1')
    var elBall2 = document.querySelector('.ball2')

    var size1 = parseFloat(elBall1.style.height)
    var size2 = parseFloat(elBall2.style.height)

    if (size1 - rand < 100) {
    }
    else {
        elBall1.style.height = size1 - rand + 'px'
        elBall1.style.width = size1 - rand + 'px'
        elBall1.innerText = size1 - rand
    }

    if (size2 - rand < 100) {
    }
    else {
        elBall2.style.height = size2 - rand + 'px'
        elBall2.style.width = size2 - rand + 'px'
        elBall2.innerText = size2 - rand
    }
}

function onBall5Click() {
    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()
}

function onBall6Click() {
    var elBall1 = document.querySelector('.ball1')
    var elBall2 = document.querySelector('.ball2')

    var size1 = parseFloat(elBall1.style.height)
    var size2 = parseFloat(elBall2.style.height)

    elBall1.style.backgroundColor = gOrig1Color
    elBall2.style.backgroundColor = gOrig2Color

    console.log('gOrig1Color', gOrig1Color)
    elBall1.style.height = 100 + 'px'
    elBall1.style.width = 100 + 'px'
    elBall1.innerText = 100

    elBall2.style.height = 100 + 'px'
    elBall2.style.width = 100 + 'px'
    elBall2.innerText = 100

    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = 'black'
}

function onMouseenter() {
    gEnterCounter++
    gHoverTimeout = setTimeout(() => {
        onBall6Click()
    }, 2000);
    console.log('gEnterCounter', gEnterCounter)
    if(gEnterCounter > 10) {
        gEnterCounter = 0
        onBall6Click()
        onMouseleave()
    }
}

function onMouseleave() {
    clearInterval(gHoverTimeout)
}