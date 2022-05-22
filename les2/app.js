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


window.addEventListener("keydown", function(e) {
    
  console.log(e.key);


  if(e.key == "ArrowRight"){ 
   px = px + 50;
   bird.style.left = px + "px";
   //bird.img.src="img/b-right.svg";
   //bird.display_image('img/b-right.svg');
   //bird.img.load = "b-right.svg";
  }
  
  if(e.key == "ArrowLeft"){ 
    px = px - 50;
    bird.style.left = px + "px";
    //bird.img.src="img/b-left.svg";
    //bird.display_image('img/b-left.svg');
    //bird.img.load = "b-left.svg";
   }

   if(e.key == "ArrowUp"){ 
    px = px + 50;
    bird.style.bottom = px + "px";
    //bird.img.src="img/b-up.svg";
    //bird.display_image('img/b-up.svg');
    //bird.img.load = "b-up.svg";
   }

   if(e.key == "ArrowDown"){ 
    px = px - 50;
    bird.style.bottom = px + "px";
    //bird.img.src="img/b-down.svg";
    //bird.display_image('img/b-down.svg');
    //bird.img.load = "b-down.svg";
   }


})