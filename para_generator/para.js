const input = document.getElementById("words");
const mybtn = document.getElementById("mybtn");
const container = document.querySelector(".container");
let word;

const generateWord = (n)=>{
 let text="";
 const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

 for(let i = 0 ;i<n;i++)
 {
    text += letter[(Math.random()*25).toFixed(0)];
 }
 return text;
};

mybtn.addEventListener("click",()=>{
    word = Number(input.value);
    if(word == '')
    return;
     let str="";
    for(let i = 0 ;i<word; i++)
    {
       str= str + (generateWord((Math.random()*15).toFixed(0))).toLowerCase();
       str+=" ";
    }
    const para = document.createElement("p");
    para.innerText=str;
    para.setAttribute("class","paras");
    container.append(para);
    input.value =" ";

});

