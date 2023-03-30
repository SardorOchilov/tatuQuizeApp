const options = document.querySelector(".questions-box").children;
const answers = document.querySelector(".answer-box").children;
const alertText = document.getElementById('alert-text');
const activeOption = document.createElement('div');
activeOption.classList.add('active')

let result = 0;
let selectedOption = null;

for (let option of options) {
  option.addEventListener("click", () => {
    result = option.className.split(" ")[1];
    selectedOption = option;
    option.append(activeOption)
  });
}

for (let answer of answers) {
  answer.addEventListener("click", () => {
    if (result === answer.className.split(" ")[1]) {
      selectedOption.innerHTML = `<img src="images/True.svg" class="found">`;
      answer.innerHTML = `<img src="images/True.svg" class="found">`;
      alertText.textContent = "To'g'ri";
    } else {
      alertText.textContent = "Xato tanladingiz. Javobini qaytadan tanlang!"
    }

  });
}
