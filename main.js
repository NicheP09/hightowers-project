const observer = new IntersectionObserver(entries  => {
  if (entries[0].isIntersecting) {
   heroPara.classList.add('ani-one')
   heroH1.classList.add('ani-two')
   bookBtnCon.classList.add('ani-three')
   heroImgCon.classList.add('ani-four')
   console.log('seen')
  }else {
    heroPara.classList.remove('ani-one')
    heroH1.classList.remove('ani-two')
    bookBtnCon.classList.remove('ani-three')
    heroImgCon.classList.remove('ani-four')
    console.log('not')
  }
})

const heroPara= document.querySelector('.hero p');
const heroH1= document.querySelector('.hero h1');
const bookBtnCon= document.querySelector('.bookTrip-con');
const heroImgCon= document.querySelector('.hero-image');
observer.observe(heroPara )
observer.observe(heroH1 )
observer.observe(bookBtnCon )
observer.observe(heroImgCon )