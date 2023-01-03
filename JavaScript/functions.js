function clap(){
    const audio = new Audio("sounds_clap.wav");
    audio.play();
    document.getElementById("A").style.height="100%";
    document.getElementById("A").style.width="10%";
    document.getElementById("clap").style.fontSize="6vh";
    document.getElementById("clap").style.fontWeight="bold";
    var a = Math.floor(Math.random()*10);
    if(a<5){
        document.getElementById("f").style.backgroundColor="rgb(255, 98, 0)";
        document.getElementById("A").style.backgroundColor="rgb(255, 98, 0)";
    }
    else{
        document.getElementById("f").style.backgroundColor="red";
        document.getElementById("A").style.backgroundColor="red";
    }

}
function clap1(){
    document.getElementById("A").style.height="80%";
    document.getElementById("A").style.width="8%";
    document.getElementById("clap").style.fontSize="1rem";
    document.getElementById("clap").style.fontWeight=null;
    document.getElementById("f").style.backgroundColor="black";
    document.getElementById("A").style.backgroundColor="aquamarine";
}

function hihat(){
    const audio = new Audio("sounds_hihat.wav");
    audio.play();
    document.getElementById("S").style.height="100%";
    document.getElementById("S").style.width="10%";
    document.getElementById("hihat").style.fontWeight="bold";
    document.getElementById("hihat").style.fontSize="6vh";
    var a = Math.floor(Math.random()*10);
    if(a<5){
        document.getElementById("f").style.backgroundColor="orange";
    document.getElementById("S").style.backgroundColor="orange";
    }
    else{
        document.getElementById("f").style.backgroundColor="yellow";
    document.getElementById("S").style.backgroundColor="yellow";
    }
}
function hihat1(){
    document.getElementById("S").style.height="80%";
    document.getElementById("S").style.width="8%";
    document.getElementById("hihat").style.fontSize="1rem";
    document.getElementById("hihat").style.fontWeight=null;
    document.getElementById("f").style.backgroundColor="black";
    document.getElementById("S").style.backgroundColor="aquamarine";
}

function kick(){
    const audio = new Audio("sounds_kick.wav");
    audio.play();
    document.getElementById("D").style.height="100%";
    document.getElementById("D").style.width="10%";
    document.getElementById("kick").style.fontWeight="bold";
    document.getElementById("kick").style.fontSize="6vh";
    var a = Math.floor(Math.random()*10);
    if(a<5){
        document.getElementById("f").style.backgroundColor="green";
    document.getElementById("D").style.backgroundColor="green";
    }
    else{
    document.getElementById("f").style.backgroundColor="rgb(98, 255, 0)";
    document.getElementById("D").style.backgroundColor="rgb(98, 255, 0)";
    }
}
function kick1(){
    document.getElementById("D").style.height="80%";
    document.getElementById("D").style.width="8%";
    document.getElementById("kick").style.fontSize="1rem";
    document.getElementById("kick").style.fontWeight=null;
    document.getElementById("f").style.backgroundColor="black";
    document.getElementById("D").style.backgroundColor="aquamarine";
}

function openhat(){
   const audio = new Audio("sounds_openhat.wav");
    audio.play();
    document.getElementById("F").style.height="100%";
    document.getElementById("F").style.width="10%";
    document.getElementById("openhat").style.fontWeight="bold";
    document.getElementById("openhat").style.fontSize="4vh";
    var a = Math.floor(Math.random()*10);
    if(a<5){
        document.getElementById("f").style.backgroundColor="blue";
    document.getElementById("F").style.backgroundColor="blue";
    }
    else{
    document.getElementById("f").style.backgroundColor="rgb(98, 0, 255)";
    document.getElementById("F").style.backgroundColor="rgb(98, 0, 255)";
    } 
}
function openhat1(){
    document.getElementById("F").style.height="80%";
    document.getElementById("F").style.width="8%";
    document.getElementById("openhat").style.fontSize="1rem";
    document.getElementById("openhat").style.fontWeight=null;
    document.getElementById("f").style.backgroundColor="black";
    document.getElementById("F").style.backgroundColor="aquamarine";
}

function boom(){
    const audio = new Audio("sounds_boom.wav");
    audio.play();
    document.getElementById("G").style.height="100%";
    document.getElementById("G").style.width="10%";
    document.getElementById("boom").style.fontWeight="bold";
    document.getElementById("boom").style.fontSize="6vh";
    document.getElementById("f").style.backgroundColor="aqua";
    document.getElementById("G").style.backgroundColor="aqua";
    document.getElementById("G").style.border="0.4rem dashed black";
}
function boom1(){
    document.getElementById("G").style.height="80%";
    document.getElementById("G").style.width="8%";
    document.getElementById("G").style.border="0.4rem solid black";
    document.getElementById("boom").style.fontSize="1rem";
    document.getElementById("boom").style.fontWeight=null;
    document.getElementById("f").style.backgroundColor="black";
    document.getElementById("G").style.backgroundColor="aquamarine";
}

function ride(){
    const audio = new Audio("sounds_ride.wav");
    audio.play();
    document.getElementById("H").style.height="100%";
    document.getElementById("H").style.width="10%";
    document.getElementById("ride").style.fontWeight="bold";
    document.getElementById("ride").style.fontSize="6vh";
    var a = Math.floor(Math.random()*10);
    if(a<5){
    document.getElementById("f").style.backgroundColor="rgb(98, 255, 0)";
    document.getElementById("H").style.backgroundColor="rgb(98, 255, 0)";
    }
    else{
    document.getElementById("f").style.backgroundColor="rgb(0, 250, 100)";
    document.getElementById("H").style.backgroundColor="rgb(0,250,100)";
    }
}
function ride1(){
    document.getElementById("H").style.height="80%";
    document.getElementById("H").style.width="8%";
    document.getElementById("ride").style.fontSize="1rem";
    document.getElementById("ride").style.fontWeight=null;
    document.getElementById("f").style.backgroundColor="black";
    document.getElementById("H").style.backgroundColor="aquamarine";
}

function snare(){
    const audio = new Audio("sounds_snare.wav");
    audio.play();
    document.getElementById("J").style.height="100%";
    document.getElementById("J").style.width="10%";
    document.getElementById("snare").style.fontWeight="bold";
    document.getElementById("snare").style.fontSize="6vh";
    var a = Math.floor(Math.random()*10);
    if(a<5){
    document.getElementById("f").style.backgroundColor="gray";
    document.getElementById("J").style.backgroundColor="gray";
    }
    else{
    document.getElementById("f").style.backgroundColor="silver";
    document.getElementById("J").style.backgroundColor="silver";
    }
}
function snare1(){
    document.getElementById("J").style.width="8%";
    document.getElementById("J").style.height="80%";
    document.getElementById("snare").style.fontWeight=null;
    document.getElementById("snare").style.fontSize="1rem";
    document.getElementById("J").style.backgroundColor="aquamarine";
    document.getElementById("f").style.backgroundColor="black";
}

function tom(){
    const audio = new Audio("sounds_tom.wav");
    audio.play();
    document.getElementById("K").style.height="100%";
    document.getElementById("K").style.width="10%";
    document.getElementById("tom").style.fontWeight="bold";
    document.getElementById("tom").style.fontSize="6vh";
    var a = Math.floor(Math.random()*10);
    if(a<5){
    document.getElementById("f").style.backgroundColor="magenta";
    document.getElementById("K").style.backgroundColor="magenta";
    }
    else{
    document.getElementById("f").style.backgroundColor="pink";
    document.getElementById("K").style.backgroundColor="pink";
    }
}
function tom1(){
    document.getElementById("K").style.height="80%";
    document.getElementById("K").style.width="8%";
    document.getElementById("tom").style.fontSize="1rem";
    document.getElementById("f").style.backgroundColor="black";
    document.getElementById("tom").style.fontWeight=null;
    document.getElementById("K").style.backgroundColor="aquamarine";
}

function tink(){
    const audio = new Audio("sounds_tink.wav");
    audio.play();
    document.getElementById("L").style.height="100%";
    document.getElementById("L").style.width="10%";
    document.getElementById("tink").style.fontWeight="bold";
    document.getElementById("tink").style.fontSize="6vh";
    var a = Math.floor(Math.random()*10);
    if(a<5){
        document.getElementById("f").style.backgroundColor="yellow";
    document.getElementById("L").style.backgroundColor="yellow";
    }
    else{
        document.getElementById("f").style.backgroundColor="rgb(100,150,200)";
    document.getElementById("L").style.backgroundColor="rgb(100,150,200)";
    }
}
function tink1(){
    document.getElementById("L").style.height="80%";
    document.getElementById("L").style.width="8%";
    document.getElementById("tink").style.fontSize="1rem";
    document.getElementById("tink").style.fontWeight=null;
    document.getElementById("f").style.backgroundColor="black";
    document.getElementById("L").style.backgroundColor="aquamarine";
}