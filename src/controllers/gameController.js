import Graph from '../components/Graph';
import { tileToPoint } from '../common/helpers';

/**
 * App state(size,colors counter, current graph)
 */
const state = {
    size:12,
    colors:4,
    graph: new Graph(12)
}

function setSize(value){
    state.size = value;
    setInitGraph(value);
} 

function setInitGraph(value){
    state.graph = new Graph(value);
}

function setColors(value){
    state.colors = value;
}

function findPath(startId, endId) {
    const start = document.getElementById(startId);
    const end = document.getElementById(endId);
    
    console.log(tileToPoint(start).col);

    // DEV: Update GRAPH
    //state.graph.update();
    console.log(state.graph);
}

export {state, setColors, setSize, findPath};