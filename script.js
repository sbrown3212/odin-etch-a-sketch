
const container = document.querySelector('#container');

function createGrid(squaresPerSide) {
    for (let i = 0; i < (squaresPerSide ** 2); i++) {
        let square = document.createElement('DIV');
        let flexBasis = 1/squaresPerSide*100;

        square.className = 'square';
        square.style.border = '1px solid lightgray';         // for visualization purposes
        square.style.flexBasis = `${flexBasis}%`;
        container.appendChild(square);
    }
}

createGrid(16);

container.addEventListener('mouseover', (e) => {
    if (e.target.className === 'square') {
        e.target.style.backgroundColor = 'black';
    }
});
