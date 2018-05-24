import Graph from '../components/Graph';
import { tileToPoint } from '../common/helpers';
import BFS from '../common/shortestPath';

const state = {
    size: 12,
    colors:4,
    graph: new Graph(12),
    score: 0,
    repeat: 5,
    ballCounter:10
}

function setSize(value){
    state.size = parseInt(value);
    setInitGraph(value);
} 

function setInitGraph(value){
    state.graph = new Graph(value);
}

function setColors(value){
    state.colors = value;
}

function changeScore(value){
    state.score += value;
    const points = document.getElementById('points');
    points.innerHTML = `Wynik: ${state.score}`;
}

function findPath(startId, endId) {
    const start = tileToPoint(document.getElementById(startId));
    const end = tileToPoint(document.getElementById(endId));
    state.graph.update();
    const distance = BFS(state.graph.graph, start, end);

    if(distance > 0)
        return distance;
    else
        return 0;
}

export {state, setColors, setSize, changeScore, findPath};