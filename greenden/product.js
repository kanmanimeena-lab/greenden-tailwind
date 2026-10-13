let sidenav = document.querySelector(".sidenav");

let menubar = document.querySelector(".menubar");

menubar.addEventListener("click", function(){

 sidenav.style.right=0;

})

let closenav = document.querySelector(".close-nav");
 
closenav.addEventListener("click", function(){

  sidenav.style.right= "-50%";
})

//product search Functionality

  let productContainer = document.querySelector(".product-container");

  let search = document.querySelector(".search");

  let productList = productContainer.querySelectorAll("div");
 
search.addEventListener("keyup", function(event){

  let enteredValue = event.target.value.toUpperCase();

for(i=0; i<productList.length; i++){

  let productname = productList[i].querySelector("p").textContent;

if(productname.toUpperCase().indexOf(enteredValue)<0)

{
  productList[i].style.display = "none";
}else{

  productList[i].style.display = "block";
  console.log(productList[i]);
}

}
})