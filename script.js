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

const container = document.querySelector('#container');

// Function that creates grid within container given row and column numbers
function drawGrid(rows, columns){
    container.innerHTML = '';
    for (let i = 0; i < columns; ++i) {
        const divParent = document.createElement('div');
        divParent.classList.add('row');
        for (let j = 0; j < rows; ++j) {
            const div = document.createElement('div');
            div.addEventListener('mouseover', () => {
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                // div.style.backgroundColor = 'black';
            });
            div.classList.add('cell');
            divParent.appendChild(div);
        }
        container.appendChild(divParent);
    }
}
drawGrid(16, 16); // defaults to 16x16 grid