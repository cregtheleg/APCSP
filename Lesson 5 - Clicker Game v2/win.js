let button

function setup () {
    createCanvas(windowWidth,windowHeight)
    background(102, 255, 102)

    button = createButton('Back to Home')
    button.position(100, windowHeight/2)
    button.mousePressed(initiate)
    elements ()

}

function elements (){
    title = createElement('h1', 'GOOD JOB YOU WON!')
    title.position(100, windowHeight/14)
    
    instruct = createElement('h2', "NOW GO DO SOMETHING BETTER WITH YOUR LIFE")
    instruct.position(100, windowHeight/4)

    back = createElement('h3', 'I GUESS YOU CAN PLAY AGAIN IF YOU WANT TO: ')
    back.position(100, (windowHeight/2) - 75)


}



function initiate () {
    window.location.href = 'start.html';
}