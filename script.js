const container = document.getElementById('container')
let rowNumber = 0;

for(i=0; i<256; i++){
    if(i % 16 == 0){
        rowNumber += 1;
    }
    let divEl = document.createElement('div');
    divEl.className = `div-el-row${rowNumber}`;
    container.appendChild(divEl);
}