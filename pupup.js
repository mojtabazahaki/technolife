
const hi1=document.querySelector(".hi1");
const hi2=document.querySelector(".hi2");
const hi3=document.querySelector(".hi3");
const v11=document.querySelector(".v11");
const v22=document.querySelector(".v22");
const v23=document.querySelector(".v23");

$(hi1).mouseover(()=>{
    $(v11).show(100);
})
$(hi1).mouseout(()=>{
    $(v11).hide(100);
})
$(hi2).mouseover(()=>{
    $(v22).show(100);
})
$(hi2).mouseout(()=>{
    $(v22).hide(100);
})

$(hi3).mouseover(()=>{
    $(v23).show(100);
})
$(hi3).mouseout(()=>{
    $(v23).hide(100);
})

