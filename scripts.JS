const allbtns = document.querySelector(".calcbtn");
let bar =document.querySelector('.screen');
let counter=0;
//displaying clicked item
function Display(text) {
   if(typeof text=='string'){bar.textContent+=text}
   else if(typeof text=='object'){bar.textContent+=text.textContent}
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
 document.addEventListener('keydown',(event)=>{
    if(event.key=='Backspace'){Erase()}
   })
   document.addEventListener('keypress',(event)=>{
      if(event.key=='='){calculate()}
      else if(event.key=='*'){Display('×')}
      else if(event.key=='c'){Clear()}
      else if(event.key=='-'){Display('-')}
      else if(event.key=='/'){Display('÷')}
      else if(event.key=='+'){Display('+')}
      else if(event.key=='^'){Display('^')}
      else if(event.key=='.'){Display('.')}
      else if(event.key=='0'){Display('0')}
      else if(event.key=='1'){Display('1')}
      else if(event.key=='2'){Display('2')}
      else if(event.key=='3'){Display('3')}
      else if(event.key=='4'){Display('4')}
      else if(event.key=='5'){Display('5')}
      else if(event.key=='6'){Display('6')}
      else if(event.key=='7'){Display('7')}
      else if(event.key=='8'){Display('8')}
      else if(event.key=='9'){Display('9')}
      });
const theme=document.querySelector('.theme');
let light=true
let header=document.querySelector('.head')
theme.addEventListener('click',()=>{
if(light){
   document.querySelector('body').style.backgroundColor='#1a1a1a';
   header.style.backgroundColor='#9b9b9b';
   theme.classList.replace('fa-moon','fa-sun')
   light=false
}
else{
   document.querySelector('body').style.backgroundColor='';
   header.style.backgroundColor='antiquewhite';
   theme.classList.replace('fa-sun','fa-moon');
   light=true
}
})