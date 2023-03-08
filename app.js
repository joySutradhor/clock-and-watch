
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const second = document.getElementById('second');



setInterval(function time (){
  const date = new Date() ;
    const hours = date.getHours();
    const min = date.getMinutes ();
    const seconds = date.getSeconds();
    hours<10 ? hour.innerText = "0" + hours : hour.innerText=  (hours-12);
    seconds<10 ? second.innerText = "0" + seconds : second.innerText = seconds ;
    min<10 ? minutes.innerText = "0" + min : minutes.innerText = min ;
    hours>=12 ? document.getElementById("ap").innerText="PM" : document.getElementById('ap').innerText= "AM" ;  

}  
    
,1000)



window.onload = function () {
  
  let seconds = 00; 
  let milisecond = 00; 
  let minit = 00;
  let appendMilisecond = document.getElementById("milisecond")
  let appendSeconds = document.getElementById("stop-second")
  let appendMint = document.getElementById("stop-minute");
  let buttonStart = document.getElementById('start');
  let buttonStop = document.getElementById('stop');
  let buttonReset = document.getElementById('reset');
  let Interval ;

 buttonStart.onclick = function(){
  Interval=setInterval(x, 10);
 }

buttonStop.onclick = function(){
  clearInterval(Interval);
}

buttonReset.onclick = function(){
  seconds = 00 ;
  milisecond = 00 ;
  appendMilisecond.innerText = "0" +milisecond ;
  appendSeconds.innerText = "0" + seconds ;
  clearInterval(Interval);
}



 function x (){
  milisecond ++
  appendMilisecond.innerText = milisecond ;
  milisecond <= 9 ? appendMilisecond.innerText = "0" + milisecond : appendMilisecond.innerText = milisecond ;  
    
  
  if (milisecond > 99) {
    seconds ++ ;
    appendSeconds.innerText = "0" +seconds ;
    milisecond = 00 ;
    appendMilisecond.innerText = "0" + milisecond ;
  }
  if (seconds>9) {
    appendSeconds.innerText = seconds ;
  }

  if(seconds>59){
    minit++
    seconds = 0 ;
    appendSeconds.innerText = "0" +seconds;
    appendMint.innerText = "0" +minit ;

   }

   if (minit>9) {
    appendMint.innerText = minit ;
   }

 }
 
  

}
