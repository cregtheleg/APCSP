// Initialize UI Elements
let bananaImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title
let back
let box

// Initialize Game Variables
let lives = 3
let score = 0
let winningNum = 5
let framerate = 3

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)
  background('beige')
  frameRate(framerate)

  // Adds Score Box
  box = createImg('scorebox.png', 'score box')
  box.size(275,275)
  box.position(35,35)
  
  // Adds Title
  title = createElement('h1', 'CLICK THAT BANANA!')
  title.position((width/2)-200, height - (windowHeight-50))

  // Creates Difficulty Slider
  difficultySlider = createSlider(1, 20, 3)
  difficultySlider.position(width / 20, height - (windowHeight-200))
  difficultyLabel = createElement('h2', 'DIFFICULTY: ' + framerate)
  difficultyLabel.position(width / 20, height - (windowHeight-150))
  difficultySlider.mouseClicked(difficulty)

  // Generate Banana Image
  bananaImg = createImg('banana.png','banana image')
  bananaImg.size(200,100)

  // Creates Score Display
  scoreDisplay = createElement('h2', 'SCORE: ' + score)
  scoreDisplay.position(width / 20, height - (windowHeight-50))

  // Creates Lives Display
  livesDisplay = createElement('h2', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height - (windowHeight-100))

  // Create Back Button
  button = createButton('Go Back to Start Page')
  button.position(width/20, height - (windowHeight-250))
  button.mousePressed(goback)
}

function draw() {
  // Randomly Position Banana
  bananaImg.position(random(width), random(height))
  
}

// Adjusts Difficulty
function difficulty() {
  difficultyLabel.remove()
  framerate = difficultySlider.value()
  console.log(framerate)
  difficultyLabel = createElement('h2', 'DIFFICULTY: ' + framerate)
  difficultyLabel.position(width / 20, height - (windowHeight-150)) 
  frameRate(framerate)
  

} 

function goback () {
  window.location.href = 'start.html';
}

function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 200 && dist(mouseX, mouseY, box.x, box.y) > 275) {
    decreaseLives()
  } else {
    increaseScore()
  }
}

function increaseScore() {
  if (dist(mouseX, mouseY, box.x, box.y) < 275){
    score = score
  } else {
    scoreDisplay.remove()
    score = score + 1
    scoreDisplay = createElement('h2', 'SCORE: ' + score)
    scoreDisplay.position(width / 20, height - (windowHeight-50))
    checkWin()

  }

}

function decreaseLives() {
  livesDisplay.remove()
  lives = lives - 1
  livesDisplay = createElement('h2', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height - (windowHeight-100))

  checkLose()

}

function checkWin() {
  if (score > 2)
  window.location.href = 'win.html';

}

function checkLose() {
  if (lives < 1)
  window.location.href = 'lose.html';

}