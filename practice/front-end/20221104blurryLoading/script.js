const counter = document.querySelector(".counter");
const background = document.querySelector(".background");

let loadingInterval = setInterval(countUp, 30);
let loaded = 0;

function countUp() {
    loaded ++;
    if(loaded > 99) clearInterval(loadingInterval);

    counter.innerText = `${loaded}`;
    counter.style.opacity = scale(loaded, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(loaded, 0, 100, 30, 0)}px)`;
}

const scale = (value, inMinimum, inMaximum, outMinimum, outMaximum) => {

    return (value - inMinimum) * (outMaximum - outMinimum) / (inMaximum - inMinimum) + outMinimum;
}