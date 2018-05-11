const setView = (view) => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    root.appendChild(view());
}


export {setView};