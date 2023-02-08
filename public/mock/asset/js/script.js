// DOM要素の参照を取得
const modalOpenButton = document.querySelector('#js-modal-button');
const modalCloseButton = document.querySelector('#js-modal-close');
const modalOverlay = document.querySelector('#js-modal-overlay');
const modalContent = document.querySelector('#js-modal');

// 開くボタンがクリックされたらモーダルを開く
modalOpenButton.addEventListener('click', () => {
  modalContent.classList.add('is-show');
  document.body.classList.add('is-scrollLock');
});
// 閉じるボタンまたはモーダルの背景がクリックされたらモーダルを閉じる
const closableElement = [modalCloseButton, modalOverlay];
closableElement.forEach((element) => {
  element.addEventListener('click', () => {
    modalContent.classList.remove('is-show');
    document.body.classList.remove('is-scrollLock');
  });
});