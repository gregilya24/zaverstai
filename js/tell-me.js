let buttonSend = document.querySelector('.write-us-form-button');
let textForm = document.querySelector('.write-us-form-text-area');
let form = document.querySelector('.write-us-form');
let minLength = textForm.getAttribute('minlength');
let maxLenght = 200;

let textWrap = document.querySelector('.write-us-form-item-text');// родитель для вставки предупреждения

let allertMes = document.createElement('span'); // создание и вставка предупреждения
textWrap.append(allertMes);


textForm.oninput = function () {
  let nowLenght = (textForm.value.length);
  console.log(textForm.value.length);
  if (nowLenght < minLength || nowLenght > maxLenght ) {
    textForm.classList.add('color-text-red');
    console.log("Длинна не корректна");
    buttonSend.disabled = true;
    //Предупреждение
    allertMes.textContent = 'Длинна сообщения слишком мала/велика';
    allertMes.classList.remove('hidden');
    allertMes.classList.add('color-text-red');
    allertMes.style.position = 'absolute';
    allertMes.style.bottom = '15px';
    allertMes.style.left = '15px';

  }
  else {
    textForm.classList.remove('color-text-red');
    console.log("Длинна корректна");
    buttonSend.disabled = false;
    //Скрытие предупреждения
    allertMes.classList.add('hidden');
  }
}
buttonSend.onsubmit = function (evt) {
  evt.preventDefault();
}
