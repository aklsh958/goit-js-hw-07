const inputNameElem = document.querySelector('#name-input');
inputNameElem.addEventListener('input', handleInputNameElemEvent);

const outputNameElem = document.querySelector('#name-output');

function handleInputNameElemEvent(e) {
  const name = e.target.value.trim();

  if (name) {
    // Якщо є текст
    outputNameElem.textContent = name;
  } else {
    // Якщо порожньо
    outputNameElem.textContent = 'Anonymous';
  }
}