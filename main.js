const observer = new IntersectionObserver(entries  => {
  if (entries[0].isIntersecting) {
   heroCon.classList.add('isAnimate')
   hero.classList.add('isAnimateH')
  /* heroH1.classList.add('ani-two')
   bookBtnCon.classList.add('ani-three')
   heroImgCon.classList.add('ani-four')*/
   console.log('seen')
  }else {
    heroCon.classList.remove('isAnimate')
    hero.classList.remove('isAnimateH')
   /* heroH1.classList.remove('ani-two')
    bookBtnCon.classList.remove('ani-three')
    heroImgCon.classList.remove('ani-four')*/
    console.log('not')
  }
})

const heroCon= document.querySelector('.hero-con');
const hero= document.querySelector('.hero');
// const heroH1= document.querySelector('.hero h1');
// const bookBtnCon= document.querySelector('.bookTrip-con');
// const heroImgCon= document.querySelector('.hero-image');
observer.observe(heroCon )
observer.observe(hero )
/*observer.observe(heroH1 )
observer.observe(bookBtnCon )
observer.observe(heroImgCon )*/