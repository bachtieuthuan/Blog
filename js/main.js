document.addEventListener("DOMContentLoaded", function(){
  //Animation 
  var pointsMapHeight = $('.points-map').height() - 150;
  function addAnimation(){
    if( $('.points-map').length ){
      $(window).scroll(function () { 
        var scroll = $(window).scrollTop();
        if(scroll >= pointsMapHeight){
          $('.location').addClass('activeAnimation')
        }
      });
    }
  }
  addAnimation();
  //Animation

  //user click scroll to khampha
  const userClick = document.querySelector(".scroll-khampha");
  const vitri = document.querySelector("#khampha").offsetTop;
  userClick.addEventListener("click", function(){
    window.scrollTo(0,vitri);
  })
  //user click scroll to khampha
  //user click open modal
  const projectBtn = document.querySelector(".location-project");
  const infoBtn = document.querySelector(".location-info");
  const closeBoxPJ = document.querySelector(".closeBoxPJ");
  const closeBoxIF = document.querySelector(".closeBoxIF");
  const projectBox = document.querySelector(".project-box");
  const infoBox = document.querySelector(".info-box");
  projectBtn.addEventListener("click", function(e){
    e.preventDefault();
    projectBox.classList.add("active");
  })
  infoBtn.addEventListener("click", function(e){
    e.preventDefault();
    infoBox.classList.add("active");
  })
  closeBoxPJ.addEventListener("click", function(){
    projectBox.classList.remove("active");
  })
  closeBoxIF.addEventListener("click", function(){
    infoBox.classList.remove("active");
  })
  //user click open modal
})
