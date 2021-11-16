document.addEventListener("DOMContentLoaded", function(){
    //Sidebar
    const sideBar = document.querySelector(".sidebar");
    const sideBarBtn = document.querySelector(".sidebar-btn");
    sideBarBtn.addEventListener("click",function(){
      sideBar.classList.toggle("active");
      sideBarBtn.classList.toggle("active");
    })
})