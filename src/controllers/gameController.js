const state = {
    size:12,
    colors:4
}

function setSize(value){
    state.size = value;
} 

function setColors(value){
    state.colors = value;
}

function findPath(startId, endId) {
    const start = document.getElementById(startId);
    const end = document.getElementById(endId);
    

}

export {state, setColors, setSize, findPath};