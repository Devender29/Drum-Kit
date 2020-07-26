var buttons = [];

buttons = document.querySelectorAll(".drum");

function playKey(keyPressed){
    var audio;
    switch(keyPressed){
        case 'w':
            audio = new Audio('sounds/tom-1.mp3');
            break;
        case 'a':
            audio = new Audio('sounds/tom-2.mp3');
            break;
        case 's':
            audio = new Audio('sounds/tom-3.mp3');
            break;
        case 'd':
            audio = new Audio('sounds/tom-4.mp3');
            break;
        case 'j':
            audio = new Audio('sounds/snare.mp3');
            break;
        case 'k':
            audio = new Audio('sounds/kick-bass.mp3');
            break;
        case 'l':   
            audio = new Audio('sounds/crash.mp3');
            break;
    }
    audio.play();

    //this.style.color = "white";
}

// getting sound from mouse clicks
for(var i = 0; i < buttons.length ; i++){
    buttons[i].addEventListener("click",function(){
        var keyPressed = this.innerHTML;
        playKey(keyPressed);

        buttonAnimator(keyPressed);
        this.style.color = "white";
    } 
    )
}

// getting keyboard key events.
document.addEventListener("keydown",function(event){
 var keyPressed = event.key;
 //console.log(keyPressed);
 playKey(keyPressed);

 buttonAnimator(keyPressed);
}
);

// adding Animations to the button presses or keypresses

function buttonAnimator(key){
  var buttonClassSelector = "."+ key;

  var button =  document.querySelector(buttonClassSelector);
  button.classList.add("pressed");

  setTimeout(function(){
      button.classList.remove("pressed")
  }, 100);
}

