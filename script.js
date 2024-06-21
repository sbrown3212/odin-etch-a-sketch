
const container = document.querySelector('#container');

function createGrid(squaresPerSide) {
    for (let i = 0; i < (squaresPerSide ** 2); i++) {
        let square = document.createElement('DIV');
        let flexBasis = 1/squaresPerSide*100;

        square.style.border = '1px dotted red';         // for visualization purposes
        square.style.flexBasis = `${flexBasis}%`;
        container.appendChild(square);
    }
}

createGrid(16);