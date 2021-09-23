let slidePosition = 0;
let slides = document.getElementsByClassName('carousel-item');
const carouselNext = document.getElementById('carousel-next');
const carouselPrevious = document.getElementById('carousel-prev');
const totalSlides = slides.length;
// console.log(carouselNext);

carouselNext.addEventListener('click', function(e){
  e.preventDefault();
  slides = document.getElementsByClassName('carousel-item');
  moveToNextSlide();
  // console.log(carouselNext);
});
carouselPrevious.addEventListener('click', function(e){
  e.preventDefault();
  moveToPreviousSlide();
  console.log(e);
});


function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel-item-visible', 'active')
    slide.classList.add('carousel-act')
  }
  slides[slidePosition].classList.add('carousel-item-visible', 'active');
}


function moveToNextSlide() {
  if(slidePosition === totalSlides-1) {
    slidePosition = 0;
  }else {
    slidePosition++;
    console.log(slidePosition);
  }
  
  updateSlidePosition();
}


function moveToPreviousSlide() {
  updateSlidePosition();

  if(slidePosition === 0) {
    slidePosition = totalSlides -1;
  }else {
    slidePosition--;
  }
}