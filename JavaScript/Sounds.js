
        window.addEventListener('keydown',(event) =>{
            if(event.keyCode ===65){
                const audio = new Audio("sounds_clap.wav");
                audio.play();
                document.getElementById("A").style.height="100%";
                document.getElementById("A").style.width="10%";
                document.getElementById("clap").style.fontSize="24px";
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
            else if(event.keyCode === 83){
                const audio = new Audio("sounds_hihat.wav");
                audio.play();
                document.getElementById("S").style.height="100%";
                document.getElementById("S").style.width="10%";
                document.getElementById("hihat").style.fontWeight="bold";
                document.getElementById("hihat").style.fontSize="24px";
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
            else if(event.keyCode === 68){
                const audio = new Audio("sounds_kick.wav");
                audio.play();
                document.getElementById("D").style.height="100%";
                document.getElementById("D").style.width="10%";
                document.getElementById("kick").style.fontWeight="bold";
                document.getElementById("kick").style.fontSize="24px";
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
            else if(event.keyCode === 70){
                const audio = new Audio("sounds_openhat.wav");
                audio.play();
                document.getElementById("F").style.height="100%";
                document.getElementById("F").style.width="10%";
                document.getElementById("openhat").style.fontWeight="bold";
                document.getElementById("openhat").style.fontSize="24px";
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
            else if(event.keyCode === 71){
                const audio = new Audio("sounds_boom.wav");
                audio.play();
                document.getElementById("G").style.height="100%";
                document.getElementById("G").style.width="10%";
                document.getElementById("boom").style.fontWeight="bold";
                document.getElementById("boom").style.fontSize="24px";
                document.getElementById("f").style.backgroundColor="aqua";
                document.getElementById("G").style.backgroundColor="aqua";
                document.getElementById("G").style.border="0.4rem dashed black";
            }
            else if(event.keyCode === 72){
                const audio = new Audio("sounds_ride.wav");
                audio.play();
                document.getElementById("H").style.height="100%";
                document.getElementById("H").style.width="10%";
                document.getElementById("ride").style.fontWeight="bold";
                document.getElementById("ride").style.fontSize="24px";
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
            else if(event.keyCode === 74){
                const audio = new Audio("sounds_snare.wav");
                audio.play();
                document.getElementById("J").style.height="100%";
                document.getElementById("J").style.width="10%";
                document.getElementById("snare").style.fontWeight="bold";
                document.getElementById("snare").style.fontSize="24px";
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
            else if(event.keyCode === 75){
                const audio = new Audio("sounds_tom.wav");
                audio.play();
                document.getElementById("K").style.height="100%";
                document.getElementById("K").style.width="10%";
                document.getElementById("tom").style.fontWeight="bold";
                document.getElementById("tom").style.fontSize="24px";
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
            else if(event.keyCode === 76){
                const audio = new Audio("sounds_tink.wav");
                audio.play();
                document.getElementById("L").style.height="100%";
                document.getElementById("L").style.width="10%";
                document.getElementById("tink").style.fontWeight="bold";
                document.getElementById("tink").style.fontSize="24px";
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
            else{
                // const audio = new Audio("life_akhil.mp3");
                // if(event.keyCode ===80){
                //     audio.play();
                    
                // }
                // else{
                //     audio.pause();
                // }

                var audio =document.getElementById("a1");
                if(event.keyCode === 80){
                    document.getElementById("f").style.backgroundColor="violet";
                    document.getElementById("f").style.color="red";
                    audio.play();
                }
                if(event.keyCode == 81){
                    audio.pause();
                }
            } 
        });



        window.addEventListener('keyup',(event)=>{
            if(event.keyCode === 65){
                document.getElementById("A").style.height="80%";
                document.getElementById("A").style.width="8%";
                document.getElementById("clap").style.fontSize="1rem";
                document.getElementById("clap").style.fontWeight=null;
                document.getElementById("f").style.backgroundColor="black";
                document.getElementById("A").style.backgroundColor="aquamarine";
            }
            else if(event.keyCode === 83){
                document.getElementById("S").style.height="80%";
                document.getElementById("S").style.width="8%";
                document.getElementById("hihat").style.fontSize="1rem";
                document.getElementById("hihat").style.fontWeight=null;
                document.getElementById("f").style.backgroundColor="black";
                document.getElementById("S").style.backgroundColor="aquamarine";
            }
            else if(event.keyCode === 68){
                document.getElementById("D").style.height="80%";
                document.getElementById("D").style.width="8%";
                document.getElementById("kick").style.fontSize="1rem";
                document.getElementById("kick").style.fontWeight=null;
                document.getElementById("f").style.backgroundColor="black";
                document.getElementById("D").style.backgroundColor="aquamarine";
            }
            else if(event.keyCode === 70){
                document.getElementById("F").style.height="80%";
                document.getElementById("F").style.width="8%";
                document.getElementById("openhat").style.fontSize="1rem";
                document.getElementById("openhat").style.fontWeight=null;
                document.getElementById("f").style.backgroundColor="black";
                document.getElementById("F").style.backgroundColor="aquamarine";
            }
            else if(event.keyCode === 71){
                document.getElementById("G").style.height="80%";
                document.getElementById("G").style.width="8%";
                document.getElementById("G").style.border="0.4rem solid black";
                document.getElementById("boom").style.fontSize="1rem";
                document.getElementById("boom").style.fontWeight=null;
                document.getElementById("f").style.backgroundColor="black";
                document.getElementById("G").style.backgroundColor="aquamarine";
            }
            else if(event.keyCode === 72){
                document.getElementById("H").style.height="80%";
                document.getElementById("H").style.width="8%";
                document.getElementById("ride").style.fontSize="1rem";
                document.getElementById("ride").style.fontWeight=null;
                document.getElementById("f").style.backgroundColor="black";
                document.getElementById("H").style.backgroundColor="aquamarine";
            }
            else if(event.keyCode === 74){
                document.getElementById("J").style.height="80%";
                document.getElementById("J").style.width="8%";
                document.getElementById("snare").style.fontSize="1rem";
                document.getElementById("snare").style.fontWeight=null;
                document.getElementById("f").style.backgroundColor="black";
                document.getElementById("J").style.backgroundColor="aquamarine";
            }
            else if(event.keyCode === 75){
                document.getElementById("K").style.height="80%";
                document.getElementById("K").style.width="8%";
                document.getElementById("tom").style.fontSize="1rem";
                document.getElementById("tom").style.fontWeight=null;
                document.getElementById("f").style.backgroundColor="black";
                document.getElementById("K").style.backgroundColor="aquamarine";
            }
            else if(event.keyCode === 76){
                document.getElementById("L").style.height="80%";
                document.getElementById("L").style.width="8%";
                document.getElementById("tink").style.fontSize="1rem";
                document.getElementById("tink").style.fontWeight=null;
                document.getElementById("f").style.backgroundColor="black";
                document.getElementById("L").style.backgroundColor="aquamarine";
            }

            if(event.keyCode === 81){
                document.getElementById("f").style.backgroundColor="silver";
                document.getElementById("f").style.color="white";

            }
        });