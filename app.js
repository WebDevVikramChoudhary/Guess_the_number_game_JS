let form = document.querySelector("#form");
let number_guessed = document.querySelector("#number_guessed");
let value = document.querySelector("#value");
let ans = document.querySelector("#ans");

let generated_number = Math.floor(Math.random() * 100 + 1);
console.log(generated_number);

form.addEventListener("submit", function (e) {
  event.preventDefault();
  value.innerHTML = parseInt(number_guessed.value);

  if (generated_number === parseInt(number_guessed.value)) {
    ans.innerHTML = `you Guessed right, The Number is ${generated_number}`;
  } else if (
    generated_number !== parseInt(number_guessed.value) &&
    generated_number > parseInt(number_guessed.value)
  ) {
    ans.innerHTML = `you Guessed Wrong, Try a Bigger Number `;
  } else if (
    generated_number !== parseInt(number_guessed.value) &&
    generated_number < parseInt(number_guessed.value)
  ) {
    ans.innerHTML = `you Guessed Wrong, Try a Smaller Number `;
  }
  number_guessed.value = "";
});
