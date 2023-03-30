const options = document.querySelector(".questions-box").children;
const answers = document.querySelector(".answer-box").children;
const alertText = document.getElementById('alert-text');
const activeOption = document.createElement('div');
activeOption.classList.add('active')
const wrongSelect = document.getElementById("wrongSelect");

let result = 0;
let selectedOption = null;
let wrongSelectCount = 0;

for (let option of options) {
  option.addEventListener("click", () => {
    result = option.className.split(" ")[1];
    selectedOption = option;
    option.append(activeOption)
    alertText.textContent = '';
  });
}

for (let answer of answers) {
  answer.addEventListener("click", () => {
    alertText.textContent = '';
    if (result === answer.className.split(" ")[1]) {
      selectedOption.innerHTML = `<img src="images/True.svg" class="found">`;
      answer.innerHTML = `<img src="images/True.svg" class="found">`;
      alertText.textContent = "To'g'ri";
      selectedOption = null;
    } else if(selectedOption === null) {
      alertText.textContent = "Faqat javobni tanlash kifoya emas!"
    } else {
        alertText.textContent = "Xato javobni tanladingiz!"
        wrongSelect.textContent = `${++wrongSelectCount}`;
    }
  });
}
