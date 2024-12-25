const allbtns = document.querySelector(".calcbtn");
let bar =document.querySelector('.screen');
let counter=0;
//displaying clicked item
function Display(text) {
   bar.textContent+=text.innerText;
}
function Clear(){
    bar.textContent=''
}
function Erase (){
   bar.textContent= bar.textContent.slice(0, -1);
}  
 function calculate(){
   if(bar.textContent.includes('×')){
      bar.textContent= eval(bar.textContent.replace('×','*'));
   }
   else if(bar.textContent.includes('÷')){
      bar.textContent= eval(bar.textContent.replace('÷','/'));

   }else if(bar.textContent.includes('^')){
      bar.textContent= eval(bar.textContent.replace('^','**'));
   }
   else{
      bar.textContent=eval(bar.textContent)
   }
    
 }
 function powerOfTwo(){
  calculate()
  bar.textContent = Number(bar.textContent**2);
 }