


const signals = {
    green : document.getElementById('sig3'),
    ready : document.getElementById('sig2'),
    red : document.getElementById('sig1')
}

const actions = {
    go : document.getElementById('goac'),
    ready : document.getElementById('readyac'),
    stop : document.getElementById('stopac')
}
const inactive_color = "#4b5069";

function resetAll(){
    Object.values(signals).forEach(each => (each.style.backgroundColor=inactive_color))
    Object.values(actions).forEach(each=>(each.style.backgroundColor=inactive_color))
}

function stop(){
    resetAll();
    signals.red.style.backgroundColor="red";
    actions.stop.style.backgroundColor="red";
}

function go(){
    resetAll();
    signals.green.style.backgroundColor="green";
    actions.go.style.backgroundColor="green";
}
function ready(){
    resetAll();
    signals.ready.style.backgroundColor="orange";
    actions.ready.style.backgroundColor="orange";
}
