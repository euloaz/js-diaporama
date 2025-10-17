let currentDiapoIndex = 0;
const diapos = document.querySelectorAll('.diapo');
showDiapo(currentDiapoIndex);

document.querySelector('.precedent').addEventListener('click', () => {
    showDiapo(currentDiapoIndex -1);
})
document.querySelector('.suivant').addEventListener('click', () => {
    showDiapo(currentDiapoIndex +1);
})

function showDiapo(nb){
    diapos.forEach(diapo => diapo.style.display = "none");

    if (nb >= diapos.length){
        currentDiapoIndex = 0;
        nb = 0;
    }else if (nb < 0 ){
        currentDiapoIndex = diapos.length -1;
        nb = diapos.length -1;
    } else {
        currentDiapoIndex = nb;
    }
        
    diapos[nb].style.display = "initial";

    
}
showDiapo(currentDiapoIndex);