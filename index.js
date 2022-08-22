const selectedSectionEl = document.getElementById('selected-section'); 
const playerExpensesEl = document.getElementById('player-expenses');

;
var arrPlayers = [];
function selectPlayer(element){
    //alert show
    if(arrPlayers.length>4){
        alert('You have already selected five players')
        return;
    }
   const playerName=  element.parentNode.children[0].innerText;
  
    arrPlayers.push('${playerName}');
   const h3El = document.createElement('h3');
   h3El.innerHTML = `<h5><span>${arrPlayers.length}.</span> ${playerName}</h5>`
   selectedSectionEl.appendChild(h3El);
  
   //disabled button
   element.disabled = true;
  

}

function calculatePlayerExpenses(){
    const perPlayerPriceEl = document.getElementById('per-player-price');
   
    playerExpensesEl.innerText = +perPlayerPriceEl.value*(arrPlayers.length);
    // console.log(perPlayerPriceEl.value)
}
function finalAmount(){
    const managerEl = document.getElementById('manager');
    const coachEl = document.getElementById('coach');
    const totalAmountEl = document.getElementById('total');
    totalAmountEl.innerText= +managerEl.value + +coachEl.value + +playerExpensesEl.innerText;
}