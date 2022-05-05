const animations = document.querySelectorAll('.u-animation');
const observer = new IntersectionObserver(callbackRouter);
animations.forEach(observer.observe.bind(observer));

function callbackRouter(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.forEach(item => {
        if (item === 'u-fade-up') entry.target.classList.add('u-fade-up__active');
        if (item === 'u-fade-left') entry.target.classList.add('u-fade-left__active');
        if (item === 'u-fade-right') entry.target.classList.add('u-fade-right__active');
      });
    }
  });
}


// テキスト背景アニメーション
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




