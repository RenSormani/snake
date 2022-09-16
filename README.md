# Snake
As part of my journey through the JavaScript fundamentals I was charged with creating a fully-functional game using everything I had learned to date. I chose to develop the classic game Snake, incorporating functions, classes and keypresses in JavaScript, as well as giving it a more aesthetically pleasing design than the classic Nokia 3310 game, courtesy of the CSS knowledge I'd previously garnered. So, without further ado, I present my version of Snake... Feed the Snake!


# What I used:
•	JavaScript
•	HTML
•	CSS
•	SCSS
•	BEM
•	GitHub

# The Design
I built this version of Snake using minimal HTML, clean CSS, and concentrated mainly on the JavaScript. When it came to designing the game, I decided to forgo Canvas and concentrate on using CSS grid, which turned out perfect for creating a 21x21 square gameboard, as well as representing the snake, its ever-expanding tail and the food it eats. 

# The Process
When it came to creating the game Snake, I took a step-by-step process as outlined below:
1.	Create the board and a still snake
2.	Make the snake move automatically
3.	Create arrow key functionality to control the snake
4.	Incorporate food and the score
5.	Make the snake’s tail grow whenever it ate some food
6.	Create the game over parameters (i.e. hitting the grid wall/intersecting snake tail)

# The Functionality
•	The game itself runs on a CSS grid of 21 x 21. The head of the snake is the size of one of the grid squares, as is the food.

•	The snake starts off in the center of the grid and moves in the direction of the arrow key pressed. When the snake comes across some “food” the food will disappear and the snake’s tail will grow according to the value assigned to the expansion_rate  variable. Likewise the speed of the snake is set according to the snake_speed variable. These can only be adjusted at the moment in the JavaScript file, but I may add difficulty settings at a later stage.

•	Arrow keys have been programmed with the functionality to move the snake in that particular direction, whilst also limiting its ability to return on itself.

•	Food has been set to reappear in a random position on the grid once eaten by the snake.

•	The game is over when the snake either crosses the boundaries of the grid (i.e. hits the wall) or it intersects with its own tail, resulting in an alert which prompts the user to click ‘ok’ to restart the game.

# Feed The Snake
<img width="634" alt="2022-03-15 (2)" src="https://user-images.githubusercontent.com/93707792/158358181-c80cea46-17ec-4277-8b4d-67da54392ba9.png">
