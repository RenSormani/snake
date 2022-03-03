import { update as updateSnake, draw as drawSnake, snake_speed, getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
 
//Variables
let lastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById('game-board')

//game loop to constantly repeat and update the game render (snake position/food). Also If game over, then sets up an alert to say they lost, then refreshes page to restart
function main(currentTime) {
    if (gameOver) {
        if (confirm('Unlucky Chief. Looks like you lost! Press ok to restart.')){
            window.location = '/';
        };
        return;
    };
    
    // requests a frame to animate the game. 
    window.requestAnimationFrame(main);
        // dividing by 1000 converts from milliseconds to seconds
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
        if (secondsSinceLastRender < 1 / snake_speed) return;
        
    // allows for a new render time
    lastRenderTime = currentTime;
    
    //An update loop that updates all game logic and draw loop that draws everything based on the update loop
    update()
    draw()
    };
    
    window.requestAnimationFrame(main);

    //Functions to update snake and food and check for a failure state

    function update() {
        updateSnake();
        updateFood();
        checkDeath();
    };

    function draw() {
        // set innerHTML to nothing to clear previous snake pieces
        gameBoard.innerHTML = '';
        drawSnake(gameBoard);
        drawFood(gameBoard);
    };

    //if outside grid or snake intersects itself = game over
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
};
