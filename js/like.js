let likeButton = document.querySelector('.like-button');
let numberLike = document.querySelector('.number-of-like');
let likeCheked = false;

likeButton.onclick = function (evt){
evt.preventDefault();


if(likeCheked == true) {
    console.log("Лайк минус");
    numberLike.textContent--;
    likeCheked = false;


} else {


    console.log("Лайк плюс");
    // numberLike = numberLike + 1;
    numberLike.textContent++;
    console.log(numberLike.textContent);
    numberLike.classList.add('like-checked');
    likeCheked = true;

}
}
