import {state, changeScore} from '../controllers/gameController';

const checkRepeat = () => {

    let tiles = document.getElementsByClassName('tile');
    rowsArray([...tiles], state.size).map(row => {
        let res = 0;
        res = checkSubarray(row);
        if(res.highestStreak >= state.repeat){
            changeScore(res.highestStreak);
            removeBalls(row, res);
        }
    });

    columnsArray([...tiles], state.size).map(col => {
        let res = 0;
        res = checkSubarray(col);
        if(res.highestStreak >= state.repeat){
            changeScore(res.highestStreak);
            removeBalls(col, res);
        }
    });  
 
}

function removeBalls(arr, res) {
    arr.slice(res.index, res.index+res.highestStreak).map(el => {
        if(el.hasChildNodes()){
            el.removeChild(el.childNodes[0]);
            el.setAttribute('data-color',null);
            el.setAttribute('data-ball', false);
        }
    });
}

function rowsArray(arr, chunkSize){
    let results = [];
    while (arr.length){
        results.push(arr.splice(0, chunkSize));
    }

    return results;
}

function columnsArray(arr,size){
    let res = [];
    let temp = 0;

    for(let i = 0; i<size; i++){
        res[i] = [];
        temp = i;
        for(let j = 0; j<size; j++){
            res[i].push(arr[temp]);
            temp+=size;
        }
    }

    return res;
}

function checkSubarray(arr) {
    let temp;
    let streak = 0;
    let highestStreak = 0;
    let tempIndex = 0
    let index = 0

    for(let i = 0; i < arr.length; i++) {
        if(temp !== null  && temp === arr[i].getAttribute('data-color') && arr[i].hasChildNodes()) {
            streak++;
        } else {
            streak = 1;
            tempIndex = i;
        }

        temp = arr[i].getAttribute('data-color');
        if(streak > highestStreak) {
            highestStreak = streak;
            index = tempIndex;
        }
    }

    return {highestStreak, index};
}



export { checkRepeat };