// フェードアップ
const fadeIns = document.querySelectorAll('.u-fade-in-trigger');
const fadeIn = new IntersectionObserver(fadeInCallback);
fadeIns.forEach(fadeIn.observe.bind(fadeIn));

function fadeInCallback(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('u-fade-in');
    }
  });
};

// フェードアップ
const fadeUps = document.querySelectorAll('.u-fade-up-trigger');
const fadeUp = new IntersectionObserver(fadeUpCallback);
fadeUps.forEach(fadeUp.observe.bind(fadeUp));

function fadeUpCallback(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('u-fade-up');
    }
  });
};

// フェードレフト
const fadeLefts = document.querySelectorAll('.u-fade-left-trigger');
const fadeLeft = new IntersectionObserver(fadeLeftCallback);
fadeLefts.forEach(fadeLeft.observe.bind(fadeLeft));

function fadeLeftCallback(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('u-fade-left');
    }
  });
};

// フェードライト
const fadeRights = document.querySelectorAll('.u-fade-right-trigger');
const fadeRight = new IntersectionObserver(fadeRightCallback);
fadeRights.forEach(fadeRight.observe.bind(fadeRight));

function fadeRightCallback(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('u-fade-right');
    }
  });
};


// 背景スライド(中身のアニメーション。遅れて表示)
const bgLRextends = document.querySelectorAll('.u-bg-lr-extend-trigger');
const bgLRextend = new IntersectionObserver(bgLRextendCallback);
bgLRextends.forEach(bgLRextend.observe.bind(bgLRextend));

function bgLRextendCallback(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('u-bg-lr-extend');
    }
  });
};

// 背景スライド(左右にスライドするアニメーション)
const bgappears = document.querySelectorAll('.u-bg-appear-trigger');
const bgappear = new IntersectionObserver(bgappearCallback);
bgappears.forEach(bgappear.observe.bind(bgappear));

function bgappearCallback(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('u-bg-appear');
    }
  });
};



