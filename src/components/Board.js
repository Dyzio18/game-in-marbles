import Tile from './Tile';
import Ball from './Ball';
import {score} from '../controllers/gameController';

class Board {

    constructor(size){
        this.size = size;
    }

    boardGenerate(){
        const generatedBoard = new Promise(resolve =>{
            const board = document.createElement('div');
            board.className = 'gameBoard';

            for(let j = 0; j<this.size; j++){
                const row = document.createElement('div');
                row.className = 'row';
                for(let i = 0; i<this.size; i++){
                    const tile = new Tile(j,i,false, null);
                    row.appendChild(tile.tileHTML())
                }
                board.appendChild(row)
            }
            resolve(board);
        });

        return generatedBoard;
    }

    initBalls(count, colors){
        const boardLength = this.size * this.size;
        const tileArr = [...document.getElementsByClassName('tile')];

        for(let i = 0; i < count; i++){
            const elem = tileArr[Math.floor(Math.random() * boardLength)];
            const ball = new Ball(colors.randColor());

            if(elem.childNodes.length === 0) {
                elem.appendChild(ball.ballHTML());
                elem.setAttribute("data-color", ball.color);
            }
            else i--;   
        }
    }
}

export default Board;