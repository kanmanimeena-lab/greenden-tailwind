let sidenav = document.querySelector(".sidenav");

let menubar = document.querySelector(".menubar");

menubar.addEventListener("click", function(){

 sidenav.style.right=0;

})

let closenav = document.querySelector(".close-nav");
 
closenav.addEventListener("click", function(){

  sidenav.style.right= "-50%";
})