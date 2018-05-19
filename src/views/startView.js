import gameView from './gameView';
import button from './../components/button';
import rangeInput from './../components/rangeInput';
import renderView from '../controllers/viewController';
import {setColors, setSize} from '../controllers/gameController';

const startView = () =>{   
    const view = document.createElement('div');
    view.className = 'welcome';
    view.innerHTML = '<h1> Gra w kulki </h1>';
    view.appendChild(button('startGame', 'start', 'btn btn__prime', renderView, gameView));

    const menu = document.createElement('div');
    menu.className = 'welcome__sliders';

    const titleA = document.createElement('p');
    titleA.innerHTML = 'Rozmiar planszy: <span id="size-range-result" class="slider__result">12</span>'; 
    menu.appendChild(titleA);
    menu.appendChild(rangeInput('size-range', 'rozmiar', '10','16', '12', setSize));

    const titleB = document.createElement('p');
    titleB.innerHTML = 'Ilosc kolorów: <span id="color-count-result" class="slider__result">4</span>'; 
    menu.appendChild(titleB);
    menu.appendChild(rangeInput('color-count', 'kolory', '2', '6', '4', setColors));

    view.appendChild(menu);

    return view;
}

export default startView;