const goal = 25;
let entries = [];
const entriesWrapper = document.querySelector('#entries')
document.querySelector('#target').innerText = goal;

function addNewEntry(program) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild)
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(program.toFixed(1));
    listItem.appendChild(listValue);

    entriesWrapper.appendChild(listItem)
}

function reducer(total, currentValue) {
    return total + currentValue;
}

function calcTotal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById('total').innerText = totalValue;
    document.getElementById('progressTotal').innerText = totalValue
}

function calcAverage() {
    const average = entries.reduce(reducer) / entries.length;
    document.getElementById('progressTotal').innerText = average;
}


function weeklyHigh() {
    const high = Math.max(...entries);
    document.getElementById('high').innerText = high;
}


function calcGoal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    const compiledPercent = totalValue / (goal / 100);
    const progressCircle = document.querySelector('#progressCircle');
    if (compiledPercent > 100) compiledPercent === 100;
    progressCircle.getElementsByClassName.background = `conic-gradient(#70db70 ${compiledPercent} %, #2d3740 ${compiledPercent}% 100%)`
}


const form = document.querySelector('form').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const entry = Number(document.querySelector('#entry').value);
    if (!entry) return;
    document.querySelector('form').reset();
    entries.push(entry)
    addNewEntry(entry);
    calcTotal();
    calcAverage();
    weeklyHigh();
    console.log(typeof entry)
}


