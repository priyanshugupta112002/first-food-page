// index js
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  // class list is a property to add ,toggle and remove the css class list
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
// let section =document.querySelectorAll('section')
// let navLinks =document.querySelectorAll('header .navbar a')

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  // section.forEach(sec =>{

  //   let top = window.scrollY;
  //   let height = sec.offsetHeight;
  //   let offset = sec.offsetTop - 150;
  //   let id = sec.getAttribute('id');

  //   if(top >= offset && top < offset + height){
  //     navLinks.forEach(links =>{
  //       links.classList.remove('active');
  //       document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
  //     });
  //   };
  // });
};
// function loader(){
//   document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//   setInterval(loader, 300);
// }
// window.onload=fadeOut;
// window.onload = fadeOut;

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};
document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

