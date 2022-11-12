const open = document.querySelector('.open');
const close = document.querySelector('.close');
const navigation = document.querySelector('.navbar');

open.addEventListener("click", function(){
    navigation.classList.toggle("hide");
});

// AOS plugin

AOS.init({
  
  offset:150,
  delay: 0, 
  duration: 1000, 
  easing: 'ease',

});
