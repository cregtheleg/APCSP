// Initialize UI Elements
let bananaImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title

// Initialize Game Variables
let lives = 3
let score = 0
let winningNum = 5
let framerate = 3

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)


  // Setup Lives Display
  livesDisplay = createElement('h2', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 14)
  
  
  // Creates Difficulty Slider
  difficultySlider = createSlider(1, 20, 3)
  difficultySlider.position(width / 20, height / 5.5)
  
  
}

function draw() {
  // Adjust frameRate according to slider
  framerate = difficultySlider.value()
  console.log(framerate)
  difficultyLabel = createElement('h2', 'DIFFICULTY: ' + framerate)
  difficultyLabel.position(width / 20, height / 8 ) 
  frameRate(framerate)

  // Randomly Position Banana
  // bananaImg.position(random(width), random(height))


}

function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 200) {
    decreaseLives()
  }
}

function increaseScore() {

}

function decreaseLives() {

}

function checkWin() {


}

function checkLose() {

}
