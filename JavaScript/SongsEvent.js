
window.addEventListener('keydown',(event)=>{
    var a = Math.floor(Math.random()*10);
    var audio = document.getElementById(a);
   if(event.keyCode==79){
        audio.pause();
       }
       if(event.keyCode==78){
           audio.play();
       }
   });


        
    