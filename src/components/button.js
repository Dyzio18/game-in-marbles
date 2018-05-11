const button = (id, text, className = "btn btn__normal", action, ...keys) => {
    const btn = document.createElement('button');
    btn.className = className;
    btn.id = id;
    btn.innerHTML = text;
    btn.addEventListener('click', () => action(...keys), false);

    return btn;
}

export default button;