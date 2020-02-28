let button
let enter

function setup () {
    createCanvas(windowWidth,windowHeight)
    background('beige')
    button = createButton('Go to Game')
    button.position(100, windowHeight/2)
    button.mousePressed(initiate)
    elements ()

}

function elements (){
    title = createElement('h1', 'WELCOME TO THE BANANA CLICKER GAME!')
    title.position(100, windowHeight/14)
    
    instruct = createElement('h2', "INSTRUCTIONS ARE SIMPLE - CLICK THE BANANA 3 TIMES TO WIN BUT DON'T RUN OUT OF LIVES!")
    instruct.position(100, windowHeight/4)
    
    enter = createElement('h3', 'ENTER GAME HERE: ')
    enter.position(100, (windowHeight/2) - 75)

}



function initiate () {
    window.location.href = 'game.html';
}