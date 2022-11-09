const container = document.getElementById('container');
const rows = document.getElementsByClassName('row')

function createGrid(gridSize){
    createRows(gridSize);
    createCells(gridSize);
}

function createRows(rowNumber){
    for(i = 0; i < rowNumber; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    }
}

function createCells(cellNumber){
    for(j = 0; j < rows.length; j++){
        for(i = 0; i < cellNumber; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            let row = rows[j];
            row.appendChild(cell);
        }
    }
}

createGrid(16);


