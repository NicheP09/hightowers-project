import { testimonialsDetails } from "./data.js";



const hamburger = document.querySelector('.hamburger-con');
const navLinks = document.querySelector('.nav-links')

const heroCon= document.querySelector('.hero-con');
const hero= document.querySelector('.hero');
const articleGrid = document.querySelector('.article-grid');

const enjoy= document.querySelector('.enjoy-grid');
const card= document.querySelector('.card-grid');
const  discoverGrid= document.querySelector('.discover-grid');

hamburger.addEventListener('click', ()=> {
  navLinks.classList.toggle('active')
 
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








interSectArray('destiGrid', articleGrid)

function interSectArray(observer,elem, thresh=0.5) {

  const obsever = new IntersectionObserver(entries  => {
  if (entries[0].isIntersecting) {
   elem.classList.add('isAnimate')
 
  
   
  }else {
    elem.classList.remove('isAnimate')
    
   
 
  
  }
}, {threshold: thresh})




obsever.observe(elem )

}




interSectArray("observerEnjoy",enjoy);
interSectArray("observerCard",card)

interSectArray("observerDicover",discoverGrid, 0.2);




function renderTestimonials() {
let testimonialHtml ='';

testimonialsDetails.forEach(testimony => {

 testimonialHtml += `

<article class="testimonial-card swiper-slide">
<div class="testimonial-content">

  <div class="rating-stars">
      <span><i class="ri-star-fill"></i></span>
      <span><i class="ri-star-fill"></i></span>
      <span><i class="ri-star-fill"></i></span>
      <span><i class="ri-star-fill"></i></span>
      <span><i class="ri-star-fill"></i></span>
</div>

<p>
${testimony.desc}  
</p>
  </div>

<div class="profile">
<div class="profile-img">
  <img src=${testimony.dp} alt="user-dp" with=" 100">
</div>
<div class="profile-details">
<h4>${testimony.name}</h4>
<h5>${testimony.occupation}</h5>
 </div>
</div>

</article>

`

})

const testimonialsSwiperWrap = document.querySelector('.swiper-wrapper');
testimonialsSwiperWrap.innerHTML = testimonialHtml;


}
renderTestimonials()




// Initialize Swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});