const selectedSectionEl = document.getElementById('selected-section'); 
const managerEl = document.getElementById('manager');
const coachEl = document.getElementById('coach');
const totalAmountEl = document.getElementById('total');
const perPlayerPriceEl = document.getElementById('per-player-price')
var arrPlayers = [];
function selectPlayer(element){
   
   const playerName=  element.parentNode.children[0].innerText;
  
    arrPlayers.push('${playerName}');
   const h3El = document.createElement('h3');
   h3El.innerHTML = `<h5><span>${arrPlayers.length}.</span> ${playerName}</h5>`
   selectedSectionEl.appendChild(h3El);
  
   //disabled button
   element.disabled = true;
   //
}

function calculatePlayerExpanses(){

}