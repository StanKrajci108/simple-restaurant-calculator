// // Retrieving the "result" class from HTML
// const section = document.querySelector(".result");

// // Getting data from the user
// const spending = parseFloat(
//   prompt("How much will it be for dinner together??")
// );
// const tip = parseFloat(prompt("What percentage will they tip?"));
// const people = parseInt(prompt("How many people will pay?"));

// // Calculation of how much a person will pay for food
// const result = ((spending + spending * (tip / 100)) / people).toFixed(0);
// console.log(result);

// // Creating a new paragraph, filling it and adding it to the page
// const paragraph = document.createElement("p");
// paragraph.textContent = `Each of the ${people} people will pay ${result} €.`;
// section.prepend(paragraph);

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
