
let commentForm = document.querySelector('.add-coment');
let commentList = document.querySelector('.comments-list');
let commentField = document.querySelector('.add-coment-item-text-area');
let commentName = document.querySelector('.add-coment-name');
let commentMail = document.querySelector('.add-coment-mail');


commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  let commentNameB = document.createElement('b');
  let newCommentSpan = document.createElement('span');
  newCommentSpan.classList.add('text-of-comment');

  let newCommentAva = document.createElement('img');

  newCommentSpan.textContent = commentField.value;
  commentNameB.textContent = commentName.value;
  newCommentAva.src = "img/avatar-02.jpg";


  commentField.value = '';
  commentName.value = '';
  commentMail.value = '';


  commentList.append(newComment);
  newComment.append(newCommentAva);
  newComment.append(commentNameB);
  newComment.append(newCommentSpan);
};
