// VARIABLES
let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

// add event listener with switch statement for input directions
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !==0) break;
            inputDirection = { x: 0, y: -1};
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !==0) break;
            inputDirection = { x: 0, y: 1};
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !==0) break;
            inputDirection = { x: -1, y: 0};
            break;
        case 'ArrowRight':
            if (lastInputDirection.x !==0) break;
            inputDirection = { x: 1, y: 0};
            break;
    };
});

// set variable to prevent moving down when moving up, etc
export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
};