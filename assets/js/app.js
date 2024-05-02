const startBtnElt = document.querySelector("#btnStart");
const stopBtnElt = document.querySelector("#btnStop");
const resetBtnElt = document.querySelector("#btnReset");
const heureElt = document.querySelector("#heure");
const minuteElt = document.querySelector("#minute");
const secondeElt = document.querySelector("#seconde");
const millisecondeElt = document.querySelector("#milliseconde");

let timer;
let heures=0; 
let minutes=0;
let seconde=0;
let milliseconde=0;

function formatNumber(nbr){
    return nbr.toString().padStart(2,"0");
};
console.log(formatNumber(2));

