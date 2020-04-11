/* eslint-disable no-eval */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */

function setup() {
  let randButtonId = 1
  let currentPlayer = 1
  let p1Score = 0
  let p2Score = 0

  // Get UI Elements
  const p1ScoreDisplay = select('#score1')
  const p2ScoreDisplay = select('#score2')
  const button1 = select('#button1')
  const button2 = select('#button2')
  const button3 = select('#button3')
  const button4 = select('#button4')
  const p1Win = createElement('h1', 'Player 1 Wins').hide()
  const p2Win = createElement('h1', 'Player 2 Wins').hide()


  select('#player1').style('filter', 'opacity(100%)')
  select('#player2').style('filter', 'opacity(20%)')

  setBoard()

  button1.mousePressed(function () {
    checkCorrect('button1')
  })
  
  button2.mousePressed(function () {
    checkCorrect('button2')
  })
  
  button3.mousePressed(function () {
    checkCorrect('button3')
  })
  
  button4.mousePressed(function () {
    checkCorrect('button4')
  })
  
  
  function checkCorrect (button) {
    if (button === randButtonId) {
      console.log('correct')
      addscore()
      setBoard()
      
    } else {
      console.log('wrong')
      subtractscore()
      setBoard()

    }
  }
  

  function addscore() {
    if (currentPlayer == 1) {
      p1Score = p1Score + 1
      console.log(`p1 score is: ${p1Score}`)
      console.log(`current player: ${currentPlayer}`)
      checkwin()

  } else {
      p2Score = p2Score + 1
      console.log(`p2 score is: ${p2Score}`)
      console.log(`current player: ${currentPlayer}`)
      checkwin()

  }
}

function subtractscore() {
  if (currentPlayer == 1) {
      p1Score = p1Score - 1
      console.log(`p1 score is: ${p1Score}`)
      switchplayer()
      
    } else {
      p2Score = p2Score - 1
      console.log(`p2 score is: ${p2Score}`)
      switchplayer()

    }
  } 

  function switchplayer () {
    if (currentPlayer == 1) {
      currentPlayer = 2
      console.log(`current player: ${currentPlayer}`)
      select('#player1').style('filter', 'opacity(20%)')
      select('#player2').style('filter', 'opacity(100%)')
    } else {
      currentPlayer = 1
      console.log(`current player: ${currentPlayer}`)
      select('#player1').style('filter', 'opacity(100%)')
      select('#player2').style('filter', 'opacity(20%)')
    }
  }
  
  function checkwin() {
    if (p1Score >= 3) {
      console.log(`Checking Win: p1 Score is ${p1Score}`)
      select('.main').style('filter', 'opacity(20%)') 
      select('#winner-display').style('display', 'flex')
      select('#player1WinText').show()
      p1Win.show()
      console.log('p1 wins')
    } else if (p2Score >= 3){
      console.log(`Checking Win: p1 Score is ${p2Score}`)
      select('.main').style('filter', 'opacity(20%)')
      select('#winner-display').style('display', 'flex')
      select('#player2WinText').show()
      p2Win.show()
      console.log('p2 wins')
    }
  }

  function setBoard () {
    
    let R = random(0,255)
    let G = random(0,255)
    let B = random(0,255) 
  

    let color= `RGB(${R}, ${G}, ${B})`
  
    R += 60
    G += 60
    B += 60
  
    let diffColor = `RGB(${R}, ${G}, ${B})`
    
    randButtonId = `button${Math.floor(random(1, 5))}`
    
    button1.style('background-color', color)
    button2.style('background-color', color)
    button3.style('background-color', color)
    button4.style('background-color', color)
    
    select(`#${randButtonId}`).style('background-color', diffColor)
    console.log(`correct button is: ${randButtonId}`)
  
    p1ScoreDisplay.html(p1Score)
    p2ScoreDisplay.html(p2Score)

  }

}



