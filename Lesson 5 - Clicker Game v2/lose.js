let button
let back

function setup () {
    createCanvas(windowWidth,windowHeight)
    background(255, 102, 102)
    button = createButton('Back to Home')
    button.position(100, windowHeight/2)
    button.mousePressed(initiate)
    elements ()

}

function elements (){
    title = createElement('h1', 'UNFORTUNATELY YOU LOST!')
    title.position(100, windowHeight/14)
    
    instruct = createElement('h2', "WANT TO TRY AGAIN?")
    instruct.position(100, windowHeight/4)
    
    back = createElement('h3', 'BACK TO HOME SCREEN: ')
    back.position(100, (windowHeight/2) - 75)

}



function initiate () {
    window.location.href = 'start.html';
}