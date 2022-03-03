const grid_size = 21

//gives us a random number between 0 and 1 * by grid size(21).
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * grid_size) + 1,
        y: Math.floor(Math.random() * grid_size) + 1,
    };
};

//Check to see if position is greater than the maimum and minimum grid sizes
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > grid_size ||
        position.y < 1 || position.y > grid_size
    );
};