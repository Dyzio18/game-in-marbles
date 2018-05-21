import { findPath } from '../controllers/gameController';

class Tile {

    constructor(row, col, ballObj){
        this.row = row;
        this.col = col;
        this.ballObj = ballObj;
    }

    tileHTML(){
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.id = `row-${this.row}-col-${this.col}`;
        tile.setAttribute("data-row", this.row);
        tile.setAttribute("data-col", this.col);
        tile.setAttribute("data-ball", this.ballObj);

        tile.addEventListener('mouseenter', ()=>{
            const start = document.getElementsByClassName('tile--active')[0];
            if(start){                               
                // TODO: if tile is empty
                findPath(start.id, tile.id);
            }
        });

        return tile;
    }
}

export default Tile;