




// 着火点となる要素
const headings = document.querySelectorAll('.u-fade-in');

const options = {
  threshold: 1
};

// 実行するよ
const observer = new IntersectionObserver(showElements);

// 各 .heading に到達したら発動。複数あるから forEach 使うよ。
headings.forEach(heading => {
  observer.observe(heading);
});

// 要素が表示されたら実行する動作
function showElements(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 各 .heading に .active を加える
      entry.target.classList.add('u-fade-in__active');
    }
  });
};







// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){

    // 背景色が伸びて出現（左から右）
  $('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
    var elemPos = $(this).offset().top+100;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
    }
  }); 

   // 文字列を囲う子要素
  $('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
    var elemPos = $(this).offset().top+100;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
    }
  });   
}




$(window).scroll(function (){
  BgFadeAnime();
});

$(window).on('load', function(){
  BgFadeAnime();
});
