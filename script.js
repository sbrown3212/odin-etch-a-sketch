
const container = document.querySelector('#container');
const resizeButton = document.querySelector('#resize');

function createGrid(squaresPerSide) {
    for (let i = 0; i < (squaresPerSide ** 2); i++) {
        let square = document.createElement('DIV');
        let flexBasis = 1/squaresPerSide*100;

        square.className = 'square';
        square.style.border = '1px solid whitesmoke';
        square.style.flexBasis = `${flexBasis}%`;
        container.appendChild(square);
    }
}

// Load page with 16x16 square grid
createGrid(16);

// Change square background color to black on hover
container.addEventListener('mouseover', (e) => {
    if (e.target.className === 'square') {
        e.target.style.backgroundColor = 'black';
    }
});

// Create new grid with user specified height and width
resizeButton.addEventListener('click', () => {
    let squaresPerSide = parseInt(prompt('How many squares per side?'));

    // Clear #container div
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrid(squaresPerSide);
});