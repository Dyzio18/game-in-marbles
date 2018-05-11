import button from './../components/button';
import {setView} from './../controllers/viewController'
import gameView from './gameView';

const startView = () =>{   
    const view = document.createElement('div');
    view.className = 'welcome';
    view.innerHTML = '<h1> Gra w kulki </h1>';
    view.appendChild(button('startGame', 'start', 'btn btn__prime', setView, gameView));

    return view;
}

export default startView;