




const fadeIns = document.querySelectorAll('.u-fade-in');
const fadeIn = new IntersectionObserver(fadeAnime);

fadeIns.forEach( e => {
  fadeIn.observe( e );
});

function fadeAnime(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('u-fade-in__active');
    }
  });
};

const bgLRextends = document.querySelectorAll('.bgLRextendTrigger');
const bgLRextend = new IntersectionObserver(bgLRextendAnime);

bgLRextends.forEach( e => {
  bgLRextend.observe( e );
});

function bgLRextendAnime(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('bgLRextend');
    }
  });
};


const bgappears = document.querySelectorAll('.bgappearTrigger');
const bgappear = new IntersectionObserver(bgappearAnime);

bgappears.forEach( e => {
  bgappear.observe( e );
});

function bgappearAnime(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('bgappear');
    }
  });
};




