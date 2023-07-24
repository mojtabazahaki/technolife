const detail1 = document.querySelector(".detail1");
const btn = document.querySelector(".btn");
const multip1=  document.querySelector(".multip1")
const coverunderstan1= document.querySelector(".cover-understan1");
btn.addEventListener("click",()=>{
    
       detail1.classList.toggle("dispaly-non1")
       document.body.style.overflow="hidden"

 })

 multip1.addEventListener("click",()=>{
       detail1.classList.toggle("dispaly-non1")
       document.body.style.overflow="scroll"
 })
