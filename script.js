var typed = new Typed('#element', {
  strings: ['<i>Web </i> Developer.', 'a <i> Software Developer </i>' , '&amp; a Designer'],
  typeSpeed: 50,
});

document.querySelector('.cross').style.display = "none";
document.querySelector('.hamburger').addEventListener('click',()=>{
  document.querySelector('.navbar').classList.toggle('navbarGo');
     
        if(document.querySelector('.navbar').classList.contains('navbarGo')){
             document.querySelector('.ham').style.display="inline";
             document.querySelector('.cross').style.display = "none";
        }
        else{
             document.querySelector('.ham').style.display="none"
             setTimeout(()=>{
               document.querySelector('.cross').style.display = "inline";

             },300);
        }
        
})