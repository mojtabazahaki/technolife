
const detail = document.querySelector(".detail");
const detailshow = document.querySelector(".detail-show");
const multip=  document.querySelector(".multip")
const coverunderstan= document.querySelector(".cover-understan");
 detailshow.addEventListener("click",()=>{
    
       detail.classList.toggle("dispaly-non")
       document.body.style.overflow="hidden"

 })

 multip.addEventListener("click",()=>{
   detail.classList.toggle("dispaly-non")
       document.body.style.overflow="scroll"
 })
 coverunderstan.addEventListener("click",()=>{
   detail.classList.toggle("dispaly-non")
       document.body.style.overflow="scroll"
 })
