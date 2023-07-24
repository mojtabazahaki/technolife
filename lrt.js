const scroolll_fixced= document.getElementById("cov-section-second")
const imgcar=document.getElementById("img-car")
const coverbutton=document.getElementById("cover-button")
const span=document.getElementById("span-1")


const NUMBER=856;
const NUMBER_2=1256;
document.addEventListener("scroll",(e)=>{
    console.log(document.documentElement.scrollTop)
      if( document.documentElement.scrollTop >= NUMBER){
                
          scroolll_fixced.style.position="fixed"; 
          scroolll_fixced.style.top="14px"; 
          imgcar.style.maxWidth="93%"

      }else if(document.documentElement.scrollTop <  NUMBER){

        scroolll_fixced.style.position="relative"; 
        scroolll_fixced.style.top="0px"; 
        imgcar.style.maxWidth="100%"

      }
     
      
})
document.addEventListener("scroll",(e)=>{
  
      if( document.documentElement.scrollTop >= NUMBER_2){
                
          coverbutton.style.position="fixed"; 
           coverbutton.style.top="10px"; 
           span.style.backgroundColor="#1e3b58";
           span.style.color=" #fff";

      }else if(document.documentElement.scrollTop <  NUMBER_2){
        coverbutton.style.position="relative"; 
        coverbutton.style.top="0px"; 
        span.style.backgroundColor="#ffe1e1";
        span.style.color=" #ee5a66";

      }
     
      
})


//

//color: #fff;
//background: #1e3b58;
//cover-button
