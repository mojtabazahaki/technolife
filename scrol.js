

function scrollToTopWithDelay(){


  const interi = setInterval(function (){
  
  if (document.documentElement.scrollTop  !== 0) {

    var nnn =  document.documentElement.scrollTop -= 160;

  } else {
      clearInterval(interi);
  }

},1)
   
}




const scrollButton = document.getElementById("scroolll");
scrollButton.addEventListener("click", scrollToTopWithDelay);



