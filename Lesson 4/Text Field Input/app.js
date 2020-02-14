let sliderH
let sliderS
let sliderB
let textInput
function setup () {
    sliderH = createSlider(0, 360, 100)
    sliderS = createSlider(0, 100, 50)
    sliderB = createSlider(0, 100, 50)
    textInput = createInput("Type in Me")
    createCanvas(windowWidth,windowHeight)
    colorMode(HSB)
}

function draw () {
    background(sliderH.value(), sliderS.value(), sliderB.value())

    textSize(80)
    text(textInput.value(), (windowWidth-50)/2, (windowHeight-50)/2);
}