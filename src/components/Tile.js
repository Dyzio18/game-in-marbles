class Tile {

    constructor(row, col, ballObj){
        this.row = row;
        this.col = col;
        this.ballObj = ballObj;
    }

    tileHTML(){
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.setAttribute("data-row", this.row);
        tile.setAttribute("data-col", this.col);
        tile.setAttribute("data-ball", this.ballObj);
        //tile.textContent = `${this.row}/${this.col}`; //DEV

        return tile;
    }


}

export default Tile;