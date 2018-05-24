import button from './../components/button';
import { state } from '../controllers/gameController';

const scoreView = () =>{   
    const view = document.createElement('div');
    view.className = 'welcome';
    view.innerHTML = `<h1> Koniec gry </h1>
                      <h2>Twój wynik to ${state.score}</h2>  `;


    // TODO:
    // Return to welcome view and clear state

    return view;
}

export default scoreView;