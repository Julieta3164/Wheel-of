import { getLocalStorage, createListFromLocalStorage, deleteName } from "./common.js";

function nameRandom() {
    
    let list = getLocalStorage()
    // addBalloons(list)
    let rand_name = Math.floor(Math.random() * list.length)
    let getName = list[rand_name]
    if(getName != undefined){
        deleteName(rand_name)
        return getName
    }

    return false
    
}

function showElected() {
    console.log("showElected")
    let getName = nameRandom()
    if(getName!=false){
        console.log(getName)
        let div = document.getElementById("name");
        div.innerHTML = `  "${getName}" <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="rgb(192, 0, 0)" class="bi bi-emoji-dizzy-fill" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM8 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
    </svg>`
    }
    
    createListFromLocalStorage();
}

function addBalloons(updatedList) {

    let ballonsShow = document.getElementById("ballons-show")
    ballonsShow.innerHTML = ''
    for (let i = 0; i < updatedList.length; i++) {
        ballonsShow.innerHTML += `
        
        <div class="col-3">
        <img src="./img/globo.png" class="img-fluid" alt="globos de participantes width="100%" height="auto"">
        </div>
        `
            // ${ i == 4 ? '<div class="col-lg-2"></div>' : ''}
    }
}

function resetBallons() {
    let ballonsShow = document.getElementById("ballons-show")
    ballonsShow.innerHTML = ''
}



export { showElected, addBalloons, resetBallons };