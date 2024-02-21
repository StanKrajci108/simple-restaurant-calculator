const form = document.querySelector("#dinnerForm");
const section = document.querySelector(".result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const spending = parseFloat(form.elements.spending.value);
  const tip = parseFloat(form.elements.tip.value);
  const people = parseInt(form.elements.people.value);

  const result = ((spending + spending * (tip / 100)) / people).toFixed(0);

  const paragraph = document.createElement("p");
  paragraph.textContent = `Each of the ${people} people will pay ${result} €.`;
  section.prepend(paragraph);

  section.style.display = "block";
});

const spendingInput = document.querySelector("#spending");
const tipInput = document.querySelector("#tip");
