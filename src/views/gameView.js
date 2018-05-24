import Board from './../components/Board';
import Color from './../components/Colors';
import { state,  } from '../controllers/gameController';

function gameView(){
    const view = document.createElement('div');
    view.className = 'gamePanel';

    const points = document.createElement('div');
    points.id = 'points';
    points.classList = 'points';
    points.innerHTML = 'Wynik: 0';
    view.appendChild(points);

    const board = new Board(state.size);
    const colors = new Color(state.colors);

    board.boardGenerate().then((tiles)=>{
        view.appendChild(tiles);
        board.initBalls(32, colors);
    })

    return view;
}

export default gameView;