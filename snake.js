import { getInputDirection } from "./input.js"

export const snake_speed = 5;
const snakeBody = [{ x:11, y:11 }];

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

// Use for loop to take 2nd to last element in snake

export function update() {
    addSegments();
    const inputDirection = getInputDirection ()
    for (let i = snakeBody.length - 2; i >=0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    };

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
};

// loop through each segment of the snake and draw to the gameBoard
// using grid set x, y coordinates
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}
