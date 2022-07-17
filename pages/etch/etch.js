const currSize = document.getElementById('current-size');
const boardSize = document.getElementById('board-size');
const newBoard = document.getElementById('new-board');
const colorPickerScreen = document.getElementById('color-picker-screen');
let colorPicker = document.getElementById('color-picker');
boardSize.oninput = function() {
    currSize.innerHTML = this.value+'x'+this.value;
    fillCanvas();
  }
newBoard.onclick = function(){
    fillCanvas();
}
colorPickerScreen.onclick = function(){
    colorPickerScreen.style.backgroundColor = colorPicker.value;
    colorPicker.click();
}
colorPicker.oninput = function(){
    colorPickerScreen.style.backgroundColor = colorPicker.value;
}
let drawing = 0;
let colorMode = 0;
const eraser = document.getElementById('eraser');
eraser.onclick = function(){
    if (colorMode !== 1){
        colorMode = 1;
        this.style.border = 'solid';
        rainbow.style.border = 'none';
    }else{
        colorMode = 0;
        this.style.border = 'none';
    }
}
const rainbow = document.getElementById('rainbow-mode');
rainbow.onclick = function(){
    if (colorMode !== 2){
        colorMode = 2;
        this.style.border = 'solid';
        eraser.style.border = 'none';
    }else{
        colorMode = 0;
        this.style.border = 'none';
    }
}
function randomColor() {
    return Math.floor(Math.random() * 255) + 1;
  }
function color(p){
    switch (colorMode){
        case 0:
            p.style.backgroundColor = colorPicker.value;
            break;
        case 1:
            p.style.backgroundColor = 'white';
            break;
        case 2:
            p.style.backgroundColor = 'rgb('+randomColor()+', '+randomColor()+', '+randomColor()+')';
            break;
    }
    
}
function fillCanvas(){
    const drawingSpaceHolder = document.getElementById('drawing-space-holder');  
    drawingSpaceHolder.removeChild(drawingSpaceHolder.firstElementChild);
    const newSpace = document.createElement('div');
    newSpace.setAttribute('id','drawing-space');
    drawingSpaceHolder.appendChild(newSpace); 

    const drawingSpace = document.getElementById('drawing-space');
    drawingSpace.style.gridTemplateColumns = 'repeat('+boardSize.value+', 1fr)';
    let pixel = boardSize.value * boardSize.value;
    for (let x = 0; x<pixel; x++){    
        let p = document.createElement('div');
        p.addEventListener('mousedown', ()=>{
            color(p);
            drawing = true;
        });
        p.addEventListener('mousemove', () =>{
            if (drawing == true){
                color(p);
            }
            });
        p.addEventListener('mouseup', ()=>{
                drawing = false;
            });
        drawingSpace.appendChild(p);
    }
}
fillCanvas();
    
    