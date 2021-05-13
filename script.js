let darkMode = document.querySelector('.dark-change');
  darkMode.addEventListener('click', function(){
  darkMode.classList.toggle('active');
 });

 let content = document.getElementsByTagName('body')[0];
  darkMode.addEventListener('click', function(){
  content.classList.toggle('night');
 });

 const elements = document.querySelectorAll(".dark");



 darkMode.addEventListener('click', function(){
    elements.forEach( elem => {
    elem.classList.toggle('theme');
  }) 
});

