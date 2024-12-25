const allbtns = document.querySelector(".calcbtn");
let bar =document.querySelector('.screen')
//displaying clicked item
function Display(text) {
   bar.textContent+=text.innerText
}
function Clear(){
    bar.textContent=''
}
function Erase (){
   bar.textContent= bar.textContent.slice(0, -1);
}  
 function calculate(){
    bar.textContent=eval(bar.textContent)
 }