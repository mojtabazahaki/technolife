let moshahedelot = document.getElementById("moshahede-lot");
let momatn = document.querySelector(".momatn");
let write = document.querySelector(".write");
let imgmosh = document.getElementById("img-mosh");
let hideee = document.getElementById("hideee");



moshahedelot.addEventListener("click", () => {
write.classList.toggle("mosh-lot1");


  if((write.classList.contains("mosh-lot1"))){
     momatn.innerHTML='بستن'
      imgmosh.classList.remove('img-mosh')
      hideee.classList.toggle('hideee')
      
  }else{
    imgmosh.classList.add('img-mosh')
    momatn.innerHTML='مشاهده بیشتر'
    hideee.classList.toggle('hideee')
  }
});