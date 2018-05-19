class Ball {
    static id = 0;

    constructor(color){
        this.color = color;
        this.ballId = Ball.id++;
    }

    ballHTML(){
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.setAttribute("data-color", this.color);
        ball.setAttribute("data-id", this.ballId);
        ball.setAttribute("data-active",false);
        ball.style.backgroundColor = this.color;

        ball.addEventListener('click', ()=>{
            const lastTile = document.getElementsByClassName('tile--active');
            [...lastTile].map(elem => elem.classList.remove('tile--active'))
            ball.parentElement.classList.toggle('tile--active');
            ball.setAttribute("data-active",true);
        });



        return ball;
    }

}

export default Ball;