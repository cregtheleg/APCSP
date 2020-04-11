let outputDivUI
let inputDivUI

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  addInputOutputElements()

  addTopic(
    'place',
    'I once lived with my pet in a place called ',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.',
    true,
    false,
  )

  addTopic(
    'verb ending in ing',
    'One time I was ',
    " Will when suddenly I was attacked by an army of Steven's Fingernails.",
    true,
    false,
    
  )

  addTopic(
    'celebrity',
    "I was meeting ",
    " when they suddenly decided to stab me in the chest with a pen.",
    true,
    false,

  )

  addTopic(
    'sport',
    "I was playing ",
    " but I was rudely interrupted by Will mining for his gold.",
    true,
    false,

  )

  addTopic(
    'adjective',
    "I met a ",
    " person but then I realized it was a goose.",
    true,
    false,

  )

  addTopic(
    'animal',
    "I was hunting for ",
    " but then I became the hunted!.",
    false,
    true,

  )

  // Creates next button and styles it
  let outputDisplayBtn = createButton('NEXT')
  .mousePressed(showOutputHandler)
  .parent(inputDivUI)
}

  function keyPressed() {
    if (key === 'Enter') {
      showOutputHandler()
  }
  }

  function showOutputHandler() {
    outputDivUI.show()
    inputDivUI.hide()
  }


function addInputOutputElements() {
  createElement('h1', 'Mad Libs Game')
  createElement('h4', 'Enter Some Text to See The Result')

  inputDivUI = createDiv('').id('inputs')
  outputDivUI = createDiv('').id('outputs')
  outputDivUI.hide()
}

function addTopic(topic, intro, detail, uppercase, num) {
  createElement('p', `Name a ${topic.toLowerCase()}`)
    .id('input-label')
    .parent(inputDivUI)

  let inputFieldUI = createInput(' ')
    .id('input-field')
    .parent(inputDivUI)
    
    
    
    let output = createP('').parent(outputDivUI)
      outputFieldUI.changed(updateOutputHandler)
      let userInput = inputFieldUI.value()
      
      function updateOutputHandler() { 
        output.html(intro + userInput + detail)
        if (uppercase === true) {
          userInput = userInput.toUpperCase()
        }
  
        if (num === true) {
          userInput = Number(userInput)
          userInput = userInput+30
      }
    }
}
