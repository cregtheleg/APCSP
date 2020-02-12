let button

function setup () {
    createCanvas(windowWidth,windowHeight)
    background(256)
    button = createButton('Go to Game')
    button.position(windowWidth/2, windowHeight/2)
    button.mousePressed(initiate)
}

function initiate () {
    window.location.href = 'game.html';
}