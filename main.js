const hamburger = document.querySelector('.hamburger-con');
const navLinks = document.querySelector('.nav-links')
const nav = document.querySelector('nav')
const heroCon= document.querySelector('.hero-con');
const hero= document.querySelector('.hero');
const enjoy= document.querySelector('.enjoy-grid');
const card= document.querySelector('.card-grid');

hamburger.addEventListener('click', ()=> {
  navLinks.classList.toggle('show')
  nav.classList.toggle('border-bottom')
  hamburger.classList.toggle('isOpen')
})


function interSect(funcName,elem,type) {

  funcName = new IntersectionObserver(entries  => {
  if (entries[0].isIntersecting) {
  elem.classList.add(`${type}`)
  }else {
   elem.classList.remove(`${type}`)
   
  }
}, {threshold: 0.5})



funcName.observe(heroCon )
funcName.observe(hero )
}

interSect("observerHero",hero, "isAnimateHero")
interSect("observerHero",heroCon, "isAnimate")




const articleGrid = document.querySelector('.article-grid');
const destiCards = document.querySelectorAll('.desti-card');




interSectArray('destiGrid', articleGrid)

function interSectArray(observer,elem) {

  const obsever = new IntersectionObserver(entries  => {
  if (entries[0].isIntersecting) {
   elem.classList.add('isAnimate')
 
  
   
  }else {
    elem.classList.remove('isAnimate')
    
   
 
  
  }
}, {threshold: 0.5})




obsever.observe(elem )

}




interSectArray("observerEnjoy",enjoy, "isAnimate");
interSectArray("observerCard",card, "isAnimate")