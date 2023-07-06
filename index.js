document.querySelector(" .w").addEventListener("click", function (){
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    console.log("Ckicked");
});
document.querySelector(" .a").addEventListener("click", function (){
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    console.log("Ckicked");
});
document.querySelector(" .s").addEventListener("click", function (){
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    console.log("Ckicked");
});
document.querySelector(" .d").addEventListener("click", function (){
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    console.log("Ckicked");
});
document.querySelector(" .j").addEventListener("click", function (){
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    console.log("Ckicked");
});
document.querySelector(" .k").addEventListener("click", function (){
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    console.log("Ckicked");
});
document.querySelector(" .l").addEventListener("click", function (){
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    console.log("Ckicked");
});


document.addEventListener("keypress", function(event){
    keyvalue = event.key;
    switch (keyvalue) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();  
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();  
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();  
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();  
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();  
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();  
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();  
            break;
        default:
            break;
    }
})