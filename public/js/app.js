import { showElected } from "./show-name.js";

function app() {
    let btnPlay = document.getElementById("play")
    btnPlay.addEventListener('click', () => {
        showElected()
    })

}

app();