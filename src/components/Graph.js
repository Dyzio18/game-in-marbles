import { tileToPoint } from '../common/helpers';

/**
 * Class to represent game board as graph {matrix}
 * 1 - free
 * 0 - ball
 */
class Graph {

    constructor(size){
        this.size = size;
        this.graph = this.init(size);
    }

    init(size) { 
        let arr = new Array(size);
        for (let i = 0; i < size; i++) {
          arr[i] = new Array(size);
        }        
        return arr;
    }

    update(){
        const board = document.getElementsByClassName("tile");
        [...board].map( elem => {
            const row = tileToPoint(elem).row;
            const col = tileToPoint(elem).col;
            if(elem.hasChildNodes())
                this.graph[row][col] = 0;
            else 
                this.graph[row][col] = 1;
        })       
    }

    getGraph(){
        return this.graph;
    }
}

export default Graph;