import '../scss/style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// data
const grid : HTMLElement = document.querySelector('.grid')
const titleCell : HTMLElement = document.querySelector('.grid-title')
const startNum : Array<number> = []
for (let i = 2; i < 11; i++) {
    startNum.push(i)
}

// UI
function addNewElement(startNum : number) {
    let newCell : HTMLElement = document.createElement('div')
    newCell.className = 'grid-cell'
    newCell.innerHTML = `<div class="grid-cell-left">
        <div class="title">${startNum}</div>
        <div>${startNum} x 1 = ${startNum * 1 }</div>
        <div>${startNum} x 2 = ${startNum * 2 }</div>
        <div>${startNum} x 3 = ${startNum * 3 }</div>
    </div>
    <div class="grid-cell-right">
        <div>${startNum} x 4 = ${startNum * 4 }</div>
        <div>${startNum} x 5 = ${startNum * 5 }</div>
        <div>${startNum} x 6 = ${startNum * 6 }</div>
        <div>${startNum} x 7 = ${startNum * 7 }</div>
        <div>${startNum} x 8 = ${startNum * 8 }</div>
        <div>${startNum} x 9 = ${startNum * 9 }</div>
    </div>`
    grid.insertBefore(newCell, titleCell.nextSibling)
}
for (let i = 9; i > 1; i--) {
    addNewElement(i)
}