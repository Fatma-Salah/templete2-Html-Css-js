// start states count 
let aboutSection = document.querySelector('.about');
let numberBox = document.querySelectorAll('.states .box .number');
let started = false;  //function do not work

window.addEventListener('scroll',function(){
   if(window.scrollY >= aboutSection.offsetTop){
     if(!started){
       numberBox.forEach((num)=>{
           let goal = num.dataset.grad;
           let count = setInterval(()=>{
             num.textContent++;
              if(num.textContent == goal){
                 clearInterval(count);
              }
           },4000/goal);
        });
     } started = true;
   }
});

//end states count 
//  start skill progress
let divSkill = document.querySelector('.our-skills');
let spanProgress = document.querySelectorAll('.prog span')
window.addEventListener('scroll', function(){
if(window.scrollY >= divSkill.offsetTop - 250){

spanProgress.forEach((span)=>{
span.style.width = span.dataset.progress ;

});
}
});
//  end skill progress
function apper(){
   console.log( document.getElementById('ul'));
   document.getElementById('ul').style.display='block';
}
