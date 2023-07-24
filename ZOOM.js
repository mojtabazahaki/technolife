const apple = document.querySelector(".img-apple");
const applezoom = document.querySelector(".img-apple1");
const apple1 = document.querySelector(".apple1");
 
const speed = 150;
$(apple1).hide(speed) 
apple.addEventListener("mousemove",(e)=>{
     
     $(apple1).show(speed) 
  
      let topdown=-e.offsetY*.3;
      let leftright=-e.offsetX;
      
    applezoom.style.left =leftright + 'px';
    applezoom.style.top = topdown+ 'px';
})
apple.addEventListener("mouseout",(e)=>{
    
      $(apple1).hide(speed) 
    

})
