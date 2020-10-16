let buttonSend = document.querySelector('.add-coment-button');//+
let textForm = document.querySelector('.add-coment-item-text-area');//+
let form = document.querySelector('.add-coment');//+
let minLength = textForm.getAttribute('minlength');
let maxLenght = 200;

let textWrap = document.querySelector('.add-coment-item-text');// родитель для вставки предупреждения+
console.log(textWrap);

let allertMes = document.createElement('span'); // создание и вставка предупреждения
textWrap.append(allertMes);
console.log(allertMes);

textForm.oninput = function () {
  let nowLenght = (textForm.value.length);
  console.log(textForm.value.length);
  if (nowLenght < minLength || nowLenght > maxLenght ) {
    textForm.classList.add('color-text-red');
    console.log("Длинна не корректна");
    buttonSend.disabled = true;
    //Предупреждение
    textWrap.style.position = 'relative';
    allertMes.textContent = 'Длинна сообщения слишком мала/велика';
    allertMes.classList.remove('hidden');
    allertMes.classList.add('color-text-red');
    allertMes.style.position = 'absolute';
    allertMes.style.bottom = '15px';
    allertMes.style.left = '100px';

  }
  else {
    textForm.classList.remove('color-text-red');
    console.log("Длинна корректна");
    buttonSend.disabled = false;
    //Скрытие предупреждения
    allertMes.classList.add('hidden');
  }
}
