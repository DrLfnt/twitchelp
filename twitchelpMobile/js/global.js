/*$( document ).ready(function() {
    //console.log( "ready!" );

   

});*/
var swiper = new Swiper('.swiper-container');


function toggleSearch (){
    var box = document.getElementById ("searchBoxDiv");
    /*if (box.style.display == "none"){
        box.style.display = "inline-block"
    }else{
        box.style.display = "none"
    }*/


    if (box.style.opacity == 0){
      box.style.opacity = 1;
  }else{
      box.style.opacity = 0;
  }
  
}
function checkSearchVisibility (){
    
}
function validateSearchVisibility (){
  console.log("AAAAAAAAAAAAAAAAAAA");
  var box = document.getElementById ("searchBoxDiv");
  if (box.style.opacity == 0){
    box.style.display = "none";
  }else{
    box.style.display = "inline-block";
  }
}


//var searchChecker = setInterval (validateSearchVisibility, 1000);