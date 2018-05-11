import Board from './../components/Board';
import Color from './../components/Colors';

function gameView(){
    const view = document.createElement('div');
    view.className = 'gamePanel';

    const board = new Board(12);
    const colors = new Color();

    board.boardGenerate(12).then((tiles)=>{
        view.appendChild(tiles);
        board.randomBallGenerate(12, colors);
    })

    return view;
}

export default gameView;