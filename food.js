import { onSnake, expandSnake } from "./snake.js"

// Variables
let food = getRandomFoodPosition();
const expansion_rate = 1;

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
}