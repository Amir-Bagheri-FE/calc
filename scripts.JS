const allbtns = document.querySelector(".calcbtn");
let bar =document.querySelector('.screen');
let counter=0;
let opratorArthmetic=document.getElementsByClassName('oprator');
//displaying clicked item
function Display(text) {
   let  opratorsArray=["+", "-", "^", "×", "÷",'.']
   if(typeof text=='string'){
      if(opratorsArray.includes(text)){
         if(opratorsArray.includes(bar.textContent.slice(-1))){
            bar.textContent=bar.textContent.slice(0,-1)+text 
         }
         else{bar.textContent+=text}
          
      }else{bar.textContent+=text} 
   }
   else if(typeof text=='object'){
      if(opratorsArray.includes(text.textContent)){
         if(opratorsArray.includes(bar.textContent.slice(-1))){
            bar.textContent=bar.textContent.slice(0,-1)+text.textContent
         }
         else{bar.textContent+=text.textContent}
      }else{ bar.textContent+=text.textContent}
     
   }
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
let themeNum=1;
const calcTheme=document.querySelector('.fa-paint-brush')
let calculator=document.querySelector('.calculator');
let oprator=document.getElementsByClassName('dif');
let oprator2=document.getElementsByClassName('dif2');
calcTheme.addEventListener('click',()=>{
   if(themeNum==1){
      calculator.classList.replace('theme1','theme2');
      for(let k=0;k<oprator.length;k++){
         oprator[k].style.backgroundColor='aqua'
      }
      themeNum=2;
   }
   else if(themeNum==2){
      calculator.classList.replace('theme2','theme3')
      for(let k=0;k<oprator.length;k++){
         oprator[k].style.backgroundColor='lightgreen'
      }
      for(let k=0;k<oprator2.length;k++){
         oprator2[k].style.backgroundColor='yellowgreen'
      }
      themeNum=3;
   }
  else if(themeNum==3){
      calculator.classList.replace('theme3','theme1')
      for(let k=0;k<oprator.length;k++){
         oprator[k].style.backgroundColor='tomato'
      }
      for(let k=0;k<oprator2.length;k++){
         oprator2[k].style.backgroundColor='aqua'
      }
      themeNum=1;
   }});
