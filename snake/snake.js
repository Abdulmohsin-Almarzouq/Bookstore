// loading after pressing the play button
function gameLoad() {
    let gameSpace = document.getElementById('game')
    
    gameSpace.innerHTML = ''    // clearing before loading the game
    
    for (i=0; i<735; i++) {
        gameSpace.innerHTML += `
        <div id="${i}" class="boxes"></div>`
    }
}
// game dialogue below the button
function play() {
    gameLoad()

    document.getElementById('gameDialogue').innerHTML = 'Welcome to the game';

    headPosition = 367  // middle of the board

    document.addEventListener("keydown", keypress)      //begin listening for keypresses
}
// declaring the initial position, direction, and interval
let headPosition
let direction
let translation

// translates keypresses and sends direction to movement()
function keypress(event) {
    let mykey = event.key

    if ( mykey == 'ArrowUp') {
        direction = -35
        movement(direction)
    } else if ( mykey == 'ArrowRight') {
        direction = 1
        movement(direction)
    } else if ( mykey == 'ArrowDown') {
        direction = 35
        movement(direction)
    } else if ( mykey == 'ArrowLeft') {
        direction = -1
        movement(direction)
    }
}

// catching out of bounds movement
// adding the direction to the head position and calling the display function
function movement(direction) {
    // clearing the previos movement direction
    clearInterval(translation)
    // moving the head position after checking for bounds
    translation = setInterval(() => {
        console.log(headPosition)
        if (headPosition + direction >= 0 &&        // checking for upper bound
            headPosition + direction <= 734 &&      // checking for lower bound
            (headPosition%35 != 34 ||               // checking for right bound
            (headPosition + direction)%35 != 0) &&  // will return false only if both conditions are false
            (headPosition%35 != 0 ||                // checking for left bound
            (headPosition + direction)%35 != 34))    // will return false only if both conditions are false
            {
            headPosition += direction
            // displaying the movement only after moving
            movementDisplay()
        }
        else {
            gameLoss()
        }
        }
        , 100)
}

// stoping all processes and game over
function gameLoss() {
    clearInterval(translation)
    document.removeEventListener('keydown', keypress)
    document.getElementById('gameDialogue').innerHTML = 'GAME OVER!';

}

// displaying the movement
function movementDisplay() {
    // displaying the new position
    document.getElementById(headPosition).style.backgroundColor = 'red'
    // clearing the old position
    document.getElementById(headPosition-direction).style.backgroundColor = '#4e463f'
}

// mechanics to incorporate:
// adding body
// fix page scrolling with arrow keys while playing
// growth
// gameover screen
// gamestart screen

