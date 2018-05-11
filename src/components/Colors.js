class Color {

    constructor(numOfColor){
        this.colorArr = ['#DD2C00', '#2E7D32', '#FFFF00', '#6200EA', '#880E4F', '#90CAF9' ]

        if(numOfColor>0 && numOfColor<=6) this.numOfColor = numOfColor;
        else this.numOfColor = 4;
    }

    randColor(){      
        return this.colorArr[Math.floor(Math.random() * this.numOfColor)];
    }
}

export default Color;