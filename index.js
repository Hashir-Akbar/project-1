const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuItems = document.querySelectorAll(".mobile-navbar");
const heroImgDiv = document.querySelectorAll(".img-div");

console.log(mobileMenu)

mobileMenu.addEventListener("click", ()=>{
  for (let i = 0; i < mobileMenuItems.length; i++) {
    const element = mobileMenuItems[i];
    console.log(element)
    if(element.classList.contains("mobile-navbar-display")){
      element.classList.remove("mobile-navbar-display")
    }else{
  
      element.classList.add("mobile-navbar-display")
    }
    
  }
})



let j = 0;
setInterval(() => {

  if(j < heroImgDiv.length-1){
    
    heroImgDiv[j].classList.remove("img-div-display");
     j+=1;
    heroImgDiv[j].classList.add("img-div-display");

    
  }
  if(j > 1){ 
  setTimeout(() => {

      heroImgDiv[j].classList.remove("img-div-display");       
      j = 0;
      heroImgDiv[j].classList.add("img-div-display");     
    }, 3000);
  }

 

}, 3000);

