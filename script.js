let rowNum = 16;
let colNum = 16;

const customBtn = document.querySelector('#btn-grid-size');
// Draws new custom grid when button is clicked
customBtn.addEventListener('click', function() {
    let row = prompt('Enter number of rows', '1');
    let column = prompt('Enter number of columns', '1');
    if (row < 1) row = 1;
    else if (row > 150) row = 150;
    if (column < 1) column = 1;
    else if (column > 150) column = 150;
    drawGrid(row, column);
});

let isBlack = true;
let isRandom = false;
let isShading = false;

const container = document.querySelector('#container');
const btnBlack = document.querySelector('#btn-black');
const btnRandom = document.querySelector('#btn-random');
const btnShading = document.querySelector('#btn-shading');
const btnClear = document.querySelector('#btn-clear');

// Function to clear the etch-a-sketch grid
function clear() {
    for (let i = 0; i < container.children.length; ++i) {
        for (let j = 0; j < container.children[i].children.length; ++j) {
            container.children[i].children[j].style.backgroundColor = 'white';
        }
    }
}

btnBlack.addEventListener('click', function() {
    isBlack = true;
    isRandom = false;
    isShading = false;
    clear();
});
btnRandom.addEventListener('click', function() {
    isBlack = false;
    isRandom = true;
    isShading = false;
    clear();
});
btnShading.addEventListener('click', function() {
    isBlack = false;
    isRandom = false;
    isShading = true;
    clear();
});
btnClear.addEventListener('click', clear);

// Function that creates grid within container given row and column numbers
function drawGrid(rows, columns){
    container.innerHTML = '';
    for (let i = 0; i < columns; ++i) {
        const divParent = document.createElement('div');
        divParent.classList.add('row');
        for (let j = 0; j < rows; ++j) {
            const div = document.createElement('div');
            div.addEventListener('mouseover', () => {
                if (isBlack) {
                    // Code for setting the cell that is being hovered over to black, classic style
                    div.style.backgroundColor = 'black';
                } else if (isRandom) {
                    // Code for changing cell that is being hovered over to a random color
                    const red = Math.floor(Math.random() * 256);
                    const green = Math.floor(Math.random() * 256);
                    const blue = Math.floor(Math.random() * 256);
                    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                } 
                // else if (isShading) {
                //     const currentColor = div.style.backgroundColor;
                //     let colorsOnly = currentColor.split(")");
                //     colorsOnly = currentColor[0].split("(");
                //     colorsOnly = currentColor[1].split(",");
                //     let brightness = parseFloat(colorsOnly[0]); // on a scale from 0 to 255
                //     brightness += 25.5;
                //     if (brightness > 255) brightness = 255;
                //     brightness = Math.floor(brightness);
                //     // Code for darkening the cell that is being hovered over
                //     div.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
                //     console.log(brightness);
                // }
            });
            div.classList.add('cell');
            divParent.appendChild(div);
        }
        container.appendChild(divParent);
    }
}
drawGrid(rowNum, colNum); // defaults to 16x16 grid