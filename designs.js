// Select color input
const pixelCanvas = document.getElementById('pixelCanvas');
pixelCanvas.addEventListener('click', function(evt) {
    evt.preventDefault();
    const cellColor = document.getElementById('colorPicker').value;
    // ensure click occurred on a grid cell
    if(evt.target.tagName === 'TD') {
        evt.target.style.backgroundColor = cellColor;
    }
});

// Select size input
const sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputHeight = document.getElementById('inputHeight').value;
    const inputWidth = document.getElementById('inputWidth').value;
    // When size is submitted by the user, call makeGrid()
    makeGrid(inputHeight, inputWidth);
});

/**
 * @description Creates the pixel art grid
 * @param {number} inputHeight - The height of the pixel art grid
 * @param {number} inputWidth - The width of the pixel art grid
 */
function makeGrid(inputHeight, inputWidth) {
    // ensure table is clear
    pixelCanvas.innerHTML = '';
    // grid of cells
    for (let i = 0; i < inputHeight; i++) {
        // create table row
        const row = document.createElement('tr');
        for (let j=0; j < inputWidth; j++) {
            // create individual grid square and put at end of table row
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
        // add row to table
        pixelCanvas.appendChild(row);
    }
}
