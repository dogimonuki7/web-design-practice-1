
(function ($) {
  'use strict';

  //合計問題数
  let $questionTotalNum = 10;

  //現在の質問数
  let $currentNum = 0;

  //得点
  let $pointPerCorrect = 10;
  let $pointPerCorrectHalf = 5;

  var quest_val1 = 0;
  var quest_val2 = 0;
  function randomVal1() {
    quest_val1 = Math.floor(Math.random() * ((10 + 1) - 5)) + 5;
  }
  function randomVal2() {
    quest_val2 = Math.floor(Math.random() * (quest_val1 - 1)) + 1;
  }

  let timeCnt = 0; // 制限時間カウント
  let maxTimer = 10 * 1000; // 制限時間（15秒）
  let timerInterval; // setInterval の ID

  function updateTimer() {
    const timerElement = document.getElementById('timer');
    const seconds = (timeCnt / 1000).toFixed(1);
    timerElement.textContent = seconds;

    if (timeCnt <= 3000) {
      timerElement.style.color = 'black';
      timerElement.style.fontSize = '16px';
      timerElement.style.fontWeight = "normal";
    } else if (timeCnt <= 5000 && timeCnt > 3000) {
      timerElement.style.color = 'black';
      timerElement.style.fontSize = '18px';
      timerElement.style.fontWeight = "bold";
    } else {
      timerElement.style.color = 'red';
      timerElement.style.fontSize = '24px';
      timerElement.style.fontWeight = "bold";
    }
  }

  function startTimer() {
    timerInterval = setInterval(function() {
      timeCnt += 100; // 100ミリ秒加算
      if (timeCnt >= maxTimer) {
        clearInterval(timerInterval); // タイマー停止
        document.getElementById('timer').textContent = '10秒(びょう)オーバー'; // タイマー表示を0にする
      } else {
        updateTimer(); // タイマーを更新
      }
    }, 100); // 100ミリ秒ごとに更新
  }

  function stopTimer() {
    clearInterval(timerInterval); // タイマー停止
  }

  function setTimer() {
    timeCnt = 0;
    updateTimer();
    startTimer();
  }


  let questionObject = (function () {
    let Obj = function ($target) {

      this.$stratButton = $target.find('#start-btn')

      //質問の番号
      this.$questionNumber = $target.find('.quiz-question-number');

      //質問文
      this.$questionName = $target.find('.quiz-question');

      //タイマー
      this.$questionTimer = $target.find('.quiz-timer');

      //選択肢ボタン
      this.$questionButton = $target.find('.quiz-button');

      //選択肢のテキスト
      this.$answer01 = $target.find('.quiz-text01');
      this.$answer02 = $target.find('.quiz-text02');
      this.$answer03 = $target.find('.quiz-text03');
      this.$answer04 = $target.find('.quiz-text04');
      this.$answer05 = $target.find('.quiz-text05');
      this.$answer06 = $target.find('.quiz-text06');
      this.$answer07 = $target.find('.quiz-text07');
      this.$answer08 = $target.find('.quiz-text08');
      this.$answer09 = $target.find('.quiz-text09');

      //score
      this.$score = $target.find('.score-wrap .score');

      this.init();
    };
    Obj.prototype = {
      //初回設定
      init: function () {
        //イベント登録
        this.event();
      },
      event: function () {
        let _this = this;
        let score = 0;

        // スタートボタンクリック
        this.$stratButton.on("click", function () {
          $('.quiz-start').addClass('display-none');
          _this.changeQuestion();
        });

        //button クリック
        this.$questionButton.on("click", function () {

          stopTimer();

          let ans = 0;
          if ($(this).hasClass('button01')) {
            ans = 1;
          } else if ($(this).hasClass('button02')) {
            ans = 2;
          } else if ($(this).hasClass('button03')) {
            ans = 3;
          } else if ($(this).hasClass('button04')) {
            ans = 4;
          } else if ($(this).hasClass('button05')) {
            ans = 5;
          } else if ($(this).hasClass('button06')) {
            ans = 6;
          } else if ($(this).hasClass('button07')) {
            ans = 7;
          } else if ($(this).hasClass('button08')) {
            ans = 8;
          } else if ($(this).hasClass('button09')) {
            ans = 9;
          } else {
            ans = 0;
          }
          
          if (quest_val1 === (quest_val2 + ans)) {
            // $(this).parents('.quiz-answer').addClass('is-correct');
            // if (timeCnt <= 3000) {
            //   document.getElementById('audio-correct3').play();
            // } else {
            //   document.getElementById('audio-correct').play();
            // }
            // score = score + $pointPerCorrect;

            $(this).parents('.quiz-answer').addClass('is-correct');
            if (timeCnt <= 3000) {
              // 3秒以内だと10点
              document.getElementById('audio-correct3').play();
              score = score + $pointPerCorrect;
            } else {
              // 3秒オーバーだと5点
              document.getElementById('audio-correct').play();
              score = score + $pointPerCorrectHalf;
            }
          } else {
            $(this).parents('.quiz-answer').addClass('is-incorrect');
            document.getElementById('audio-incorrect').play();
          }
          $(this).addClass('is-checked');

          _this.showAnswer();

          if ($currentNum + 1 == $questionTotalNum) {
            setTimeout(function () {
              $('.finish').addClass('is-show');
              $('.score-wrap .score').text(score);
            }, 2000);
          } else {
            setTimeout(function () {
              //現在の数字の更新
              $currentNum = $currentNum + 1;

              //次の質問に切り替える
              _this.changeQuestion();

              //クラスを取る
              _this.$questionButton.removeClass('is-checked');
              $('.quiz-answer').removeClass('is-correct').removeClass('is-incorrect');

            }, 2000);
          }
          return false;
        });
      },

      changeQuestion: function () {
        let _this = this;

        //質問文の入れ替え
        randomVal1();
        randomVal2();
        _this.$questionName.text(quest_val1 + ' は ' + quest_val2 + ' といくつ？');

        _this.$answer01.text('');
        _this.$answer02.text('');
        _this.$answer03.text('');
        _this.$answer04.text('');
        _this.$answer05.text('');
        _this.$answer06.text('');
        _this.$answer07.text('');
        _this.$answer08.text('');
        _this.$answer09.text('');

        //質問番号を1つ増やす
        let numPlusOne = $currentNum + 1;
        _this.$questionNumber.text('問題 ' + numPlusOne);

        setTimer();
      },

      showAnswer: function () {
        let _this = this;

        let ansText = '';
        ansText = (quest_val1 === (quest_val2 + 1)) ? '〇 正解' : '× 不正解';
        _this.$answer01.text(ansText);

        ansText = (quest_val1 === (quest_val2 + 2)) ? '〇 正解' : '× 不正解';
        _this.$answer02.text(ansText);

        ansText = (quest_val1 === (quest_val2 + 3)) ? '〇 正解' : '× 不正解';
        _this.$answer03.text(ansText);

        ansText = (quest_val1 === (quest_val2 + 4)) ? '〇 正解' : '× 不正解';
        _this.$answer04.text(ansText);

        ansText = (quest_val1 === (quest_val2 + 5)) ? '〇 正解' : '× 不正解';
        _this.$answer05.text(ansText);

        ansText = (quest_val1 === (quest_val2 + 6)) ? '〇 正解' : '× 不正解';
        _this.$answer06.text(ansText);

        ansText = (quest_val1 === (quest_val2 + 7)) ? '〇 正解' : '× 不正解';
        _this.$answer07.text(ansText);

        ansText = (quest_val1 === (quest_val2 + 8)) ? '〇 正解' : '× 不正解';
        _this.$answer08.text(ansText);

        ansText = (quest_val1 === (quest_val2 + 9)) ? '〇 正解' : '× 不正解';
        _this.$answer09.text(ansText);
      }
      
    };
    return Obj;
  })();

  let quiz = $('.quiz');
  if (quiz[0]) {
    let queInstance = new questionObject(quiz);
  }

})(jQuery);
