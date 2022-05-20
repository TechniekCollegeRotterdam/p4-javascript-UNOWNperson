//Oefening angry-birds
// . voorr class           #voor id ,    MIX is voor hetml tags
// image opgehaald
const bird = document.querySelector(".bird");
let px = 0;
//html onclick anders click

bird.addEventListener("click", function() {
    px = px + 50; 
      //console.log("ik heb erop geklikt");
      bird.style.left = px + "px";
})


