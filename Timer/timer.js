// initializing the constant with miliseconds
const second = 1000,
minute = 60*second,
hour = 60*minute,
day = 24*hour;

// selecting all the html elements
let dayele = document.querySelector(".days");
let hourele = document.querySelector(".hours");
let minutele = document.querySelector(".minutes");
let secondele = document.querySelector(".seconds");
const h1 = document.querySelector("h1");
const timert = document.querySelector(".timer");


// main timer function
const timerFunction = ()=>{
    // creating foramt for gettign date from prompt
    let now = new Date(),
    dd = String(now.getDate()).padStart(2,"0"),
    mm = String(now.getMonth()+1).padStart(2,"0"),
    yyyy = now.getFullYear();
    let enteredDay,enteredMonth;
    // validating the date and month entered
   do{
    enteredDay = prompt("Enter Day").padStart(2,"0");
    if(enteredDay>31)
     alert("Entered date is greater than 31");
   }while(enteredDay>31);
   do{
    enteredMonth = prompt("Enter month").padStart(2,"0");
    if(enteredMonth>12)
     alert("Entered date is greater than 12");
   }while(enteredMonth>12);
    

    now = `${mm}/${dd}/${yyyy}`;

    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

    if(now>targetDate)
    {
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy+1}`;
    }
// interval with runs the function after every 0 miliseconds
const id =setInterval( ()=>{    
    const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();
    const Difference = timer - today;
    const leftday = Math.floor(Difference/day),
    lefthour = Math.floor((Difference % day)/hour),
    leftminute = Math.floor((Difference % hour)/minute),
    leftsecond = Math.floor((Difference % minute)/second);
   
    dayele.innerText = leftday;
    hourele.innerText= lefthour;
    minutele.innerText= leftminute;
    secondele.innerText= leftsecond;

// when timer get completed we clear the interval and display output
    if(Difference < 0)
    {
        timert.style.display="none";
        h1.innerText= "Time's up";
      clearInterval(id);  
    }
},0);
};
timerFunction();