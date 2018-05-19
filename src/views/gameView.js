import Board from './../components/Board';
import Color from './../components/Colors';
import { state } from '../controllers/gameController';

function gameView(){
    const view = document.createElement('div');
    view.className = 'gamePanel';

    const board = new Board(state.size);
    const colors = new Color(state.colors);

    board.boardGenerate().then((tiles)=>{
        view.appendChild(tiles);
        board.initBalls(12, colors);
    })

    return view;
}

export default gameView;