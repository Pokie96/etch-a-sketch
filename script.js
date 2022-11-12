//Declare our variables globally to be used in our functions
const container = document.getElementById('container');
const rows = document.getElementsByClassName('row');

//Function creates a grid of a given size (eg. 16 = 16x16 grid)
function createGrid(rowNum, cellNum){
    createRows(rowNum);
    createCells(cellNum);
}

//Creates the rows of our grid appending them to our container
function createRows(rowNumber){
    for(i = 0; i < rowNumber; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    }
}

//Creates the cells (columns) appending them to our rows
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

//Initially assigns variables to users input when page loads
let userRowPrompt = prompt("How many rows would you like in your grid?");
userRowPrompt = checkUserRowInput(userRowPrompt);
let userColumnPrompt = prompt("How many columns would you like in your grid?");
userColumnPrompt = checkUserColumnInput(userColumnPrompt);

//Creates our grid given our user's input
createGrid(userRowPrompt, userColumnPrompt);

//Declare a variable to select all the cells of our grid
let cells = document.querySelectorAll('.cell');

drawOverGrid()

//Function generates a random colour and returns it
function randomColour(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//Declare variable so we can select our reset button
const resetButton = document.getElementById('reset-button');


//Event listener for our reset button which removes current rows and
//prompts for new values from user to create new grid
resetButton.addEventListener('click', () => {
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    userRowPrompt = prompt("How many rows would you like in your grid?");
    userRowPrompt = checkUserRowInput(userRowPrompt);
    userColumnPrompt = prompt("How many columns would you like in your grid?");
    userColumnPrompt = checkUserColumnInput(userColumnPrompt);
    createGrid(userRowPrompt, userColumnPrompt);
    cells = document.querySelectorAll('.cell');
    drawOverGrid();
})

//Loops through our cells adding an event listener to them
function drawOverGrid (){
    cells.forEach(function(element){
        let shade = 0
        element.addEventListener('mouseover', function(){
            shade += 0.2;
            element.style.backgroundColor = `rgba(0, 0, 0, ${shade})`;
        })
    })
};
//Function to check our user row inputs are below 100
function checkUserRowInput(userInput){
    while (userInput > 100){
        alert('You can not exceed 100!');
        userInput = prompt("How many rows would you like in your grid?");
    }
    return userInput;
};

//Function to check our user column inputs are below 100
function checkUserColumnInput(userInput){
    while (userInput > 100){
        alert('You can not exceed 100!');
        userInput = prompt("How many columns would you like in your grid?");
    }
    return userInput;
};