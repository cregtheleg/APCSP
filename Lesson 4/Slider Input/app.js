let sliderH
let sliderS
let sliderB
function setup () {
    sliderH = createSlider(0, 360, 100)
    sliderS = createSlider(0, 100, 50)
    sliderB = createSlider(0, 100, 50)
    createCanvas(600,120)
    colorMode(HSB)
}

function draw () {
    background(sliderH.value(), sliderS.value(), sliderB.value())

    textSize(80)
        text("hello", 210, 100);
}