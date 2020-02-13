let bananaImg
let heading

function setup(){
    createCanvas(windowWidth,windowHeight)
    background(220)
    frameRate(60)
    bananaImg = createImg('banana.png','banana image')
    bananaImg.size(200,100)
    heading = createElement('h2','Catch The Banana!')
    heading.position(width/2, height/6)
}

function draw(){
    bananaImg.position(random(width), random(height))
    bananaImg.mousePressed(youWon)
}

function youWon(){
    heading.html('You Won!')
    bananaImg.remove()
}