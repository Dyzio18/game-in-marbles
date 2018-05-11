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
        ball.style.backgroundColor = this.color;

        return ball;
    }

}

export default Ball;