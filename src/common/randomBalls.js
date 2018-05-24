import {state} from '../controllers/gameController';
import Color from '../components/Colors';
import Ball from '../components/Ball';
import scoreView from '../views/scoreView';
import viewController from '../controllers/viewController';

// TODO:
// Add panel with balls in next round

const randomBalls = (count) => {
    const colors = new Color(state.colors);
    const tileArr = [...document.getElementsByClassName('tile')];

    let isFull = state.size * state.size;
    for(let i = 0; i < count; i++){
        const elem = tileArr[Math.floor(Math.random() * (state.size * state.size))];
        const ball = new Ball(colors.randColor());

        if(elem.childNodes.length === 0) {
            elem.appendChild(ball.ballHTML());
            elem.setAttribute("data-color", ball.color);
        }
        else {
            i--; 
            isFull--;
        }  

        if(isFull<(count+1)) {
            viewController(scoreView);
            break;
        }
    }


}


export { randomBalls };