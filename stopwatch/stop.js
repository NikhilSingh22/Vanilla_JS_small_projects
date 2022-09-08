let sec = 0,
     min = 0,
     hr = 0;

const h = document.querySelector(".hour");
const m = document.querySelector(".minute");
const s = document.querySelector(".second");
const stp = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const start = document.querySelector("#start");
let id;


start.addEventListener("click",timerFunction);
function timerFunction(){
    start.disabled = true;
    id = setInterval( ()=>{
    
    if(sec<59) sec++;
    else if( min>=59){
        hr++;
        min=0;
    }
    else{
        min++;
        sec = 0;
    }

    h.innerText = String(hr).padStart(2,"0");
    m.innerText = String(min).padStart(2,"0");
    s.innerText = String(sec).padStart(2,"0");

 },1000);
};

stp.addEventListener("click",()=>{
    start.disabled = false;
    clearInterval(id);
    });
reset.addEventListener("click",()=>{
    start.disabled = false;
    clearInterval(id);
   sec = min = hr = 0;
    h.innerText = "00";
    m.innerText = "00";
    s.innerText = "00";
})