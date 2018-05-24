import { state, findPath } from '../controllers/gameController';
import { checkRepeat } from '../common/checkRepeat';
import { randomBalls } from '../common/randomBalls';

class Tile {

    constructor(row, col, ballObj, color){
        this.row = row;
        this.col = col;
        this.ballObj = ballObj;
        this.color = color;
    }

    tileHTML(){
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.id = `row-${this.row}-col-${this.col}`;
        tile.setAttribute("data-row", this.row);
        tile.setAttribute("data-col", this.col);
        tile.setAttribute("data-ball", this.ballObj);
        tile.setAttribute("data-color", this.color);

        tile.addEventListener('click', () => {
            const start = document.getElementsByClassName('tile--active')[0];
            if(start && !tile.hasChildNodes()) {
                if(findPath(start.id, tile.id) > 0){
                    const ball = start.childNodes[0];
                    tile.appendChild(ball);
                    tile.setAttribute('data-ball', true);
                    start.setAttribute('data-ball', false);
                    start.classList.remove('tile--active');
                    tile.setAttribute("data-color", start.getAttribute('data-color'));
                    start.setAttribute("data-color","");

                    checkRepeat();
                    randomBalls(state.ballCounter);
                }                                   
            }
        })

        return tile;
    }
}

export default Tile;