var noofdrumbutton = (document.querySelectorAll(".drum")).length;

for(i=0;i<=noofdrumbutton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",sound);
}


function sound(){
    if("w"==this.innerHTML){
        var audio=new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    else if("a"==this.innerHTML){
        var audio=new Audio('sounds/tom-2.mp3');
        audio.play();
    }
    else if("s"==this.innerHTML){
        var audio=new Audio('sounds/tom-3.mp3');
        audio.play();
    }
    else if("d"==this.innerHTML){
        var audio=new Audio('sounds/tom-4.mp3');
        audio.play();
    }
    else if("j"==this.innerHTML){
        var audio=new Audio('sounds/crash.mp3');
        audio.play();
    }
    else if("k"==this.innerHTML){
        var audio=new Audio('sounds/snare.mp3');
        audio.play();
    }
    else if("l"==this.innerHTML){
        var audio=new Audio('sounds/kick.mp3');
        audio.play();
    }

}

var audio=new Audio('sounds/tom-1.mp3');
audio.play();