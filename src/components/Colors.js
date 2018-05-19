const COLOR_PALETTE = {
    red: '#D50000',
    green: '#2E7D32',
    blue: '#0D47A1',
    orange: '#F57C00',
    pink: '#C2185B',
    yellow: '#FFFF00'
}

class Color {

    constructor(numOfColor){
        this.colorArr = [COLOR_PALETTE.green,COLOR_PALETTE.blue, COLOR_PALETTE.orange, COLOR_PALETTE.pink, COLOR_PALETTE.red, COLOR_PALETTE.yellow ]

        if(numOfColor>0 && numOfColor<=6) this.numOfColor = numOfColor;
        else this.numOfColor = 4;
    }

    randColor(){      
        return this.colorArr[Math.floor(Math.random() * this.numOfColor)];
    }
}

export default Color;