import Tile from './Tile';
import Ball from './Ball';

class Board {

    constructor(size){
        this.size = size;
    }

    boardGenerate(size){
        const generatedBoard = new Promise(resolve =>{
            const board = document.createElement('div');
            board.className = 'gameBoard';

            for(let j = 0; j<size; j++){
                const row = document.createElement('div');
                for(let i = 0; i<size; i++){
                    const tile = new Tile(j,i,'obj');
                    row.appendChild(tile.tileHTML())
                }
                board.appendChild(row)
            }
            resolve(board);
        });

        return generatedBoard;
    }

    randomBallGenerate(count, colors){
        const boardLength = this.size * this.size;
        const tileArr = [...document.getElementsByClassName('tile')];

        for(let i = 0; i < count; i++){
            const elem = tileArr[Math.floor(Math.random() * boardLength)];
            const ball = new Ball(colors.randColor());

            if(elem.childNodes.length === 0) elem.appendChild(ball.ballHTML());
            else i--;   
        }
    }
}

export default Board;