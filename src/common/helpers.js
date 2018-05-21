function tileToPoint(elem){
    const row = parseInt(elem.getAttribute("data-row"));
    const col = parseInt(elem.getAttribute("data-col"));

    return {row,col};
}


export { tileToPoint };