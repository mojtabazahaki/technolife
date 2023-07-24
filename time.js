let timerr = document.querySelector('.timerr');
let timerr1 = document.querySelector('.timerr1');
let timerr2 = document.querySelector('.timerr2');
let timerr3 = document.querySelector('.timerr3');
let timerr4 = document.querySelector('.timerr4');
let timerr5 = document.querySelector('.timerr5');
let timerr6 = document.querySelector('.timerr6');
let timerr7 = document.querySelector('.timerr7');
let timerr8 = document.querySelector('.timerr8');
let timerra = document.querySelector('.timerra');

let hour  = 12;
let minutes = 59;
let second = 59 ; 

const fun1 = setInterval(timer , 1000);


function  timer (){
       
     second -= 1 ; 

     if(second == 0){
       

        second = 59 ;
        minutes-=1;
        if(minutes==0){

             minutes=59;
             hour-=1;

        }

        if(hour==0){
            hour=12;
        }


     }
      
     timerr.textContent=hour+":"+minutes+":"+second;
     timerr1.textContent=hour+":"+minutes+":"+second;
     timerr2.textContent=hour+":"+minutes+":"+second;
     timerr3.textContent=hour+":"+minutes+":"+second;
     timerr4.textContent=hour+":"+minutes+":"+second;
     timerr5.textContent=hour+":"+minutes+":"+second;
     timerr6.textContent=hour+":"+minutes+":"+second;
     timerr7.textContent=hour+":"+minutes+":"+second;
     timerr8.textContent=hour+":"+minutes+":"+second;
     timerra.textContent=hour+":"+minutes+":"+second;
     
}

