const goshisrc1212=[

    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-7-TLP-7885_34acfa3c-1965-4618-b402-354339900603.webp"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-6-TLP-7885_a36eea4b-77d5-4922-ae1b-e33dafac17b9.webp"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-5-TLP-7885_f31dcad2-3002-460e-8bb8-e9cb7c8c579c.webp"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-4-TLP-7885_88472dd5-6f92-442a-8e69-3bbe6ced9e59.webp"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-20-TLP-7885_8e5a107b-3865-40c6-9dcc-3948ae420b5d.png"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-21-TLP-7885_3ba11407-d908-4e5d-954a-1f7153419163.png"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-16-TLP-7885_ed023530-b370-494b-ae89-8a2a756063d0.png"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-16-TLP-7885_ed023530-b370-494b-ae89-8a2a756063d0.png"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-17-TLP-7885_531508f1-52a8-4786-bfd9-bae81942e805.png"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-5-TLP-7885_f31dcad2-3002-460e-8bb8-e9cb7c8c579c.webp"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-4-TLP-7885_88472dd5-6f92-442a-8e69-3bbe6ced9e59.webp"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-20-TLP-7885_8e5a107b-3865-40c6-9dcc-3948ae420b5d.png"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-21-TLP-7885_3ba11407-d908-4e5d-954a-1f7153419163.png"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-16-TLP-7885_ed023530-b370-494b-ae89-8a2a756063d0.png"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-16-TLP-7885_ed023530-b370-494b-ae89-8a2a756063d0.png"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-17-TLP-7885_531508f1-52a8-4786-bfd9-bae81942e805.png"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-5-TLP-7885_f31dcad2-3002-460e-8bb8-e9cb7c8c579c.webp"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-4-TLP-7885_88472dd5-6f92-442a-8e69-3bbe6ced9e59.webp"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-20-TLP-7885_8e5a107b-3865-40c6-9dcc-3948ae420b5d.png"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-21-TLP-7885_3ba11407-d908-4e5d-954a-1f7153419163.png"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-16-TLP-7885_ed023530-b370-494b-ae89-8a2a756063d0.png"},
    {class1:"button-img1",src:"https://www.technolife.ir/image/gallery-16-TLP-7885_ed023530-b370-494b-ae89-8a2a756063d0.png"}, 
      ]


 const build1212 = goshisrc1212.map((box,id)=>{

    return  createaaa(box.src,box.class1,id)
 })
 const imgditail33=document.querySelector(".img-ditail");
function createaaa(src,clas,id){
  
  let element1 =document.createElement("button");
  let imgsmall =document.createElement("img");
  
  imgsmall.setAttribute("src", `${src}`);
  imgsmall.setAttribute("class", `${clas}`)
  element1.setAttribute("class","btn1")
  element1.setAttribute("id",`${id+1}`)
  element1.appendChild(imgsmall)
  document.querySelector(".nbn").appendChild(element1);



}
const btn1asa = document.querySelectorAll(".btn1")



var prevElement = null;


 btn1asa.forEach((box)=>{
 

box.addEventListener("click",(e)=>{
            
   if (prevElement !== null) {
       prevElement.classList.remove("border1");
     }
     box.classList.add("border1");
      if(e.srcElement.src == undefined){
        
        
         imgditail33.setAttribute("src",`https://www.technolife.ir/image/gallery-4-TLP-7885_88472dd5-6f92-442a-8e69-3bbe6ced9e59.webp`)
        }else{
            imgditail33.setAttribute("src",`${e.srcElement.src}`)
  
        }
     
     prevElement = box;

     
 })
 })