const container = document.querySelector('#container');

const rows = 16;
const columns = 16;

for (let i = 0; i < rows; ++i) {
    const divParent = document.createElement('div');
    divParent.classList.add('row');
    for (let j = 0; j < columns; ++j) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
        div.classList.add('cell');
        divParent.appendChild(div);
    }
    container.appendChild(divParent);
}