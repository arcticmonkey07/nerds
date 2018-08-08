var popup = document.querySelector(".feedback");
var link = document.querySelector(".contacts__button");
var close = document.querySelector(".feedback__close");

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('feedback-show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('feedback-show');
});