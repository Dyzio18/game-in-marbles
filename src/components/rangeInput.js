/**
 * Create <DOM element> for welcome screen,
 * Range input to choose board size and colors counter.
 */
const rangeInput = (id, text, min, max, val, action) => {
    const range = document.createElement('input');
    range.type = 'range'
    range.step = '1';
    range.min = min;
    range.max = max;
    range.value = val;
    range.className = "slider";
    range.id = id;

    range.addEventListener('change', () => {
        document.getElementById(`${range.id}-result`).innerHTML = range.value;
        action(range.value);
    });

    return range;
}

export default rangeInput;