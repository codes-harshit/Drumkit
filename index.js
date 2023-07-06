// document.querySelector(" .w").addEventListener("click", function (){
//     var tom1 = new Audio("sounds/tom-1.mp3");
//     tom1.play();
//     console.log("Ckicked");
//     document.querySelector(".w").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".w").classList.remove("pressed")
//             }, 100)
// });
// document.querySelector(" .a").addEventListener("click", function (){
//     var tom2 = new Audio("sounds/tom-2.mp3");
//     tom2.play();
//     document.querySelector(".a").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".a").classList.remove("pressed")
//             }, 100)
    
//     console.log("Ckicked");
// });
// document.querySelector(" .s").addEventListener("click", function (){
//     var tom3 = new Audio("sounds/tom-3.mp3");
//     tom3.play();
//     document.querySelector(".s").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".s").classList.remove("pressed")
//             }, 100)
//     console.log("Ckicked");
// });
// document.querySelector(" .d").addEventListener("click", function (){
//     var tom4 = new Audio("sounds/tom-4.mp3");
//     tom4.play();
//     document.querySelector(".d").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".d").classList.remove("pressed")
//             }, 100)
//     console.log("Ckicked");
// });
// document.querySelector(" .j").addEventListener("click", function (){
//     var snare = new Audio("sounds/snare.mp3");
//     snare.play();
//     document.querySelector(".j").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".j").classList.remove("pressed")
//             }, 100)
//     console.log("Ckicked");
// });
// document.querySelector(" .k").addEventListener("click", function (){
//     var kick = new Audio("sounds/kick-bass.mp3");
//     kick.play();
//     document.querySelector(".k").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".k").classList.remove("pressed")
//             }, 100)
//     console.log("Ckicked");
// });
// document.querySelector(" .l").addEventListener("click", function (){
//     var crash = new Audio("sounds/crash.mp3");
//     crash.play();
//     document.querySelector(".l").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".l").classList.remove("pressed")
//             }, 100)
//     console.log("Ckicked");
// });


// document.addEventListener("keypress", function(event){
//     console.log()
//     keyvalue = event.key;
//     switch (keyvalue) {
//         case "w":
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play(); 
//             document.querySelector(".w").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".w").classList.remove("pressed")
//             }, 100) 
//             break;
//         case "a":
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//             document.querySelector(".a").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".a").classList.remove("pressed")
//             }, 100)  
//             break;
//         case "s":
//             var tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play(); 
//             document.querySelector(".s").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".s").classList.remove("pressed")
//             }, 100) 
//             break;
//         case "d":
//             var tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play(); 
//             document.querySelector(".d").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".d").classList.remove("pressed")
//             }, 100) 
//             break;
//         case "j":
//             var snare = new Audio("sounds/snare.mp3");
//             snare.play(); 
//             document.querySelector(".j").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".j").classList.remove("pressed")
//             }, 100) 
//             break;
//         case "k":
//             var kick = new Audio("sounds/kick-bass.mp3");
//             kick.play();  
//             document.querySelector(".k").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".k").classList.remove("pressed")
//             }, 100)
//             break;
//         case "l":
//             var crash = new Audio("sounds/crash.mp3");
//             crash.play(); 
//             document.querySelector(".l").classList.add("pressed")
//             setTimeout(function(){
//                 document.querySelector(".l").classList.remove("pressed")
//             }, 100) 
//             break;
//         default:
//             break;
//     }
// })



// -------------------------------------------Touch portion-------------------------------------

document.querySelector(" .w").addEventListener("Touch", function (){
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    console.log("Ckicked");
    document.querySelector(".w").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".w").classList.remove("pressed")
            }, 100)
});
document.querySelector(" .a").addEventListener("touch", function (){
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    document.querySelector(".a").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".a").classList.remove("pressed")
            }, 100)
    
    console.log("Ckicked");
});
document.querySelector(" .s").addEventListener("Touch", function (){
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    document.querySelector(".s").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".s").classList.remove("pressed")
            }, 100)
    console.log("Ckicked");
});
document.querySelector(" .d").addEventListener("Touch", function (){
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    document.querySelector(".d").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".d").classList.remove("pressed")
            }, 100)
    console.log("Ckicked");
});
document.querySelector(" .j").addEventListener("Touch", function (){
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    document.querySelector(".j").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".j").classList.remove("pressed")
            }, 100)
    console.log("Ckicked");
});
document.querySelector(" .k").addEventListener("Touch", function (){
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    document.querySelector(".k").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".k").classList.remove("pressed")
            }, 100)
    console.log("Ckicked");
});
document.querySelector(" .l").addEventListener("touch", function (){
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    document.querySelector(".l").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".l").classList.remove("pressed")
            }, 100)
    console.log("Ckicked");
});

