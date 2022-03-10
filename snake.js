import { getInputDirection } from "./input.js"
export const snake_speed = 7;

//VARIABLES
const snakeBody = [{ x:11, y:11 }];
let newSegments = 0;

// Use for loop to take 2nd to last element in snake
export function update() {
    addSegments();
    const inputDirection = getInputDirection ()
    for (let i = snakeBody.length - 2; i >=0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    };

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

// loop through each segment of the snake and draw to the gameBoard
// using grid set x, y coordinates
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
};

// take variable newSegments and add that amount to the snake
export function expandSnake(amount) {
    newSegments += amount;
}

// take variable newSegments and add that amount to update the score
export function updateScore(amount) {
    newSegments += amount;
}

//Determines if a position is on our snake. Checks if each position is on our segments.
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position);
    });
}

//the first element in array will always be our snake head
export function getSnakeHead() {
    return snakeBody[0];
};

//determines if the snake has interesected itself - checks head against any other position on snake
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
};

//if these positions are exactly the same onSnake will return true
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
};

//takes new segments and adds to bottom of snake. Appends new element to end of our snake
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }

    //Prevents constant expansion and only adds number of elements we told it to
    newSegments = 0;
}