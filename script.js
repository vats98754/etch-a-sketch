const customBtn = document.querySelector('#btn-grid-size');
// Draws new custom grid when button is clicked
customBtn.addEventListener('click', function() {
    const row = prompt('Enter number of rows', '1');
    const column = prompt('Enter number of columns', '1');
    let rowNum = parseInt(row);
    let colNum = parseInt(column);
    rowNum = Math.ceil(1, Math.floor(200, rowNum));
    colNum = Math.ceil(1, Math.floor(200, colNum));
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
                div.style.backgroundColor = 'black';
            });
            div.classList.add('cell');
            divParent.appendChild(div);
        }
        container.appendChild(divParent);
    }
}
drawGrid(16, 16); // defaults to 16x16 grid