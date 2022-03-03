import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

// Variables
let food = getRandomFoodPosition();
const expansion_rate = 1;
let score = 0;
divScore.innerText="Score: 0";

// if on top of food expand snake and set food to reppear in random position
export function update() {
    if (onSnake(food)) {
        score++;
        expandSnake(expansion_rate);
        food = getRandomFoodPosition();
    }
    divScore.textContent = `${"Score: "}` + score;
}

//create food element and add to gameBoard
export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
};

// Randomise food position every time it is eaten including not a position on the snake
// uses while loop to ensure that when food is null or on snake already, get new position
function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    };
    return newFoodPosition;
};