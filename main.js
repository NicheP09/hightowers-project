const observer = new IntersectionObserver(entries  => {
  if (entries[0].isIntersecting) {
   heroCon.classList.add('isAnimate')
   hero.classList.add('isAnimateHero')
  
   console.log('seen')
  }else {
    heroCon.classList.remove('isAnimate')
    hero.classList.remove('isAnimateHero')
   
 
    console.log('not')
  }
}, {threshold: 0.9})

const heroCon= document.querySelector('.hero-con');
const hero= document.querySelector('.hero');

observer.observe(heroCon )
observer.observe(hero )


const articleGrid = document.querySelector('.article-grid');
const destiCards = document.querySelectorAll('.desti-card');

const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      destiCards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('animateDesti');
        }, i * 500); 
      });
    } else {
      destiCards.forEach(card => card.classList.remove('animateDesti'));
    }
  });
}, { threshold: 0.6 });

if (articleGrid) staggerObserver.observe(articleGrid);

