const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const meanu = document.getElementById("meanu");


const showMeanu = ()=>{
    hamburger.style.display = "none";
    cross.style.display = "block";

    meanu.style.display = "block";
}
const closeMeanu = ()=>{
    hamburger.style.display = "block";
    cross.style.display = "none";

    meanu.style.display = "none";
}



hamburger.addEventListener("click",showMeanu);
cross.addEventListener("click",closeMeanu);