
//* Elements
const startBtn = document.querySelector('.start-game')
const grid = document.querySelector('.game-grid')
let cells = []
let livesDisplay = document.querySelector('.lives-display')
let scoreDisplay = document.querySelector('.score-display')
let highScoreDisplay = document.querySelector('.high-score-display')
let gameOverScreen = document.querySelector('.game-over')
let finalScoreDisplay = document.querySelector('.final-score-display')
const playAgainBtn = document.querySelector('.play-again')

//* Variables
let lives = 3
let score = 0
let gameActive = false
const startPos = 50
let currentPos = startPos
const width = 10
const cellCount = width * width
let darkFigureSpeed = 1000
let lexaeusSpeed = 500
let larxeneSpeed = 450
let marluxiaSpeed = 400

scoreDisplay.innerText = score

//* Executions
// Grid creator function
function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.innerText = i
    cell.id = i
    // Set width and height of the div cells
    cell.style.width = `${100 / width}%`
    grid.append(cell)
    cells.push(cell)
  }
  addChar(currentPos)
}

// Must call create grid function before using methods on it
createGrid()

cells[13].classList.add('pillar')

console.log(cells[3])

// Must call function movement before collision function, want them to start asap after page load as well.
col1Movement()
col2Movement()
col4Movement()
col5Movement()
col7Movement()
col8Movement()
generateNamine()

function generateNamine() {
  const endCol = cells.filter(cell => parseInt(cell.id) % 10 === 9)
  console.log(endCol)
  endCol[Math.floor(Math.random() * endCol.length)].classList.add('namine')
}


// Character movement
function addChar() {
  cells[currentPos].classList.add('char')
}

function removeChar() {
  cells[currentPos].classList.remove('char')
}

// On keypress update character position
function keyPress(evt) {
  const key = evt.code
  removeChar()
  if (key === 'ArrowUp' && currentPos >= width) {
    currentPos -= width
  } else if (key === 'ArrowDown' && currentPos + width < cells.length) {
    currentPos += width
  } else if (key === 'ArrowLeft' && currentPos % width !== 0) {
    currentPos--
  } else if (key === 'ArrowRight' && currentPos % width !== width - 1) {
    currentPos++
  }
  // Logic added to call collision function if cell moving into has an enemy class
  cells[currentPos].classList.contains('dark-figure') || cells[currentPos].classList.contains('lexaeus') || cells[currentPos].classList.contains('larxene') || cells[currentPos].classList.contains('marluxia') ? collision() : addChar()
}

//! Enemy movement
// Enemy movement column 1
// Define column in grid as an array
const enemyCol1 = cells.filter(cell => parseInt(cell.id) % 10 === 1)

// Create pattern of classes in an array to assign to the column
const col1Classes = ['dark-figure', 'dark-figure', 'blank', 'dark-figure', 'blank', 'dark-figure', 'dark-figure', 'blank', 'dark-figure', 'blank']

// Create function to remove classes from column, reconfigure col1Classes array, then reassign classes to column
function col1Movement() {
  col1Interval = setInterval(() => {
    enemyCol1.forEach(cell => {
      cell.classList.remove('blank', 'dark-figure')
    })
    col1Classes.unshift(col1Classes[9])
    col1Classes.pop(col1Classes[9])
    enemyCol1.forEach((cell, i) => {
      cell.classList.add(col1Classes[i])
      if (cell.classList.contains('dark-figure') && cell.classList.contains('char')) {
        collision()
      }
    })
  }, darkFigureSpeed)
}

// Enemy movement column 2
const enemyCol2 = cells.filter(cell => parseInt(cell.id) % 10 === 2)

const col2Classes = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'lexaeus']

function col2Movement() {
  setInterval(() => {
    enemyCol2.forEach(cell => {
      cell.classList.remove('blank', 'lexaeus')
    })
    col2Classes.push(col2Classes[0])
    col2Classes.shift(col2Classes[0])
    enemyCol2.forEach((cell, i) => {
      cell.classList.add(col2Classes[i])
      if (cell.classList.contains('lexaeus') && cell.classList.contains('char')) {
        collision()
      }
    })
  }, lexaeusSpeed)
}

// Enemy movement column 4
const enemyCol4 = cells.filter(cell => parseInt(cell.id) % 10 === 4)

const col4Classes = ['dark-figure', 'blank', 'dark-figure', 'blank', 'dark-figure', 'dark-figure', 'blank', 'dark-figure', 'blank', 'dark-figure']

function col4Movement() {
  setInterval(() => {
    enemyCol4.forEach(cell => {
      cell.classList.remove('blank', 'dark-figure')
    })
    col4Classes.push(col4Classes[0])
    col4Classes.shift(col4Classes[0])
    enemyCol4.forEach((cell, i) => {
      cell.classList.add(col4Classes[i])
      if (cell.classList.contains('dark-figure') && cell.classList.contains('char')) {
        collision()
      }
    })
  }, darkFigureSpeed)
}

// Enemy movement column 5
const enemyCol5 = cells.filter(cell => parseInt(cell.id) % 10 === 5)

const col5Classes = ['larxene', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']

function col5Movement() {
  setInterval(() => {
    enemyCol5.forEach(cell => {
      cell.classList.remove('blank', 'larxene')
    })
    col5Classes.unshift(col5Classes[9])
    col5Classes.pop(col5Classes[9])
    enemyCol5.forEach((cell, i) => {
      cell.classList.add(col5Classes[i])
      if (cell.classList.contains('larxene') && cell.classList.contains('char')) {
        collision()
      }
    })
  }, larxeneSpeed)
}

// Enemy movement column 7
const enemyCol7 = cells.filter(cell => parseInt(cell.id) % 10 === 7)

const col7Classes = ['dark-figure', 'dark-figure', 'blank', 'dark-figure', 'blank', 'dark-figure', 'dark-figure', 'blank', 'dark-figure', 'blank']

function col7Movement() {
  setInterval(() => {
    enemyCol7.forEach(cell => {
      cell.classList.remove('blank', 'dark-figure')
    })
    col7Classes.unshift(col7Classes[9])
    col7Classes.pop(col7Classes[9])
    enemyCol7.forEach((cell, i) => {
      cell.classList.add(col7Classes[i])
      if (cell.classList.contains('dark-figure') && cell.classList.contains('char')) {
        collision()
      }
    })
  }, darkFigureSpeed)
}

// Enemy movement column 8
const enemyCol8 = cells.filter(cell => parseInt(cell.id) % 10 === 8)

const col8Classes = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'marluxia']

function col8Movement() {
  setInterval(() => {
    enemyCol8.forEach(cell => {
      cell.classList.remove('blank', 'marluxia')
    })
    col8Classes.push(col8Classes[0])
    col8Classes.shift(col8Classes[0])
    enemyCol8.forEach((cell, i) => {
      cell.classList.add(col8Classes[i])
      if (cell.classList.contains('marluxia') && cell.classList.contains('char')) {
        collision()
      }
    })
  }, marluxiaSpeed)
}


// Collision function
function collision() {
  // Move character back to start position
  removeChar(currentPos)
  addChar(currentPos = startPos)
  // Remove a life
  lives -= 1
  // Update lives display
  livesDisplay.innerText = '💚'.repeat(lives)
  // Check for game over
  if (lives === 0) {
    gameOver()
  }
}


// Game over function
function gameOver() {
  gameOverScreen.style.display = 'block'
  finalScoreDisplay.innerText = score
  addChar(currentPos = startPos)
  darkFigureSpeed = 1000
  lexaeusSpeed = 500
  larxeneSpeed = 450
  marluxiaSpeed = 400
  // Update high score display?
}


function playAgain() {
  gameOverScreen.style.display = 'none'
  lives = 3
  livesDisplay.innerText = '💚'.repeat(lives)
  score = 0
  scoreDisplay.innerText = score
}


//* Events
playAgainBtn.addEventListener('click', playAgain)

document.addEventListener('keydown', keyPress)