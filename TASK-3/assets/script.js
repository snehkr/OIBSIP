const inputs = document.querySelectorAll("input");
const btn = document.querySelector(".button");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

function convertTemperature(input, unit) {
  input.addEventListener("input", () => {
    const value = parseFloat(input.value);

    switch (unit) {
      case "celsius":
        inputs[1].value = roundNumber(value * (9 / 5) + 32);
        inputs[2].value = roundNumber(value + 273.15);
        break;
      case "fahrenheit":
        inputs[0].value = roundNumber((value - 32) * (5 / 9));
        inputs[2].value = roundNumber((value - 32) * (5 / 9) + 273.15);
        break;
      case "kelvin":
        inputs[0].value = roundNumber(value - 273.15);
        inputs[1].value = roundNumber((value - 273.15) * (9 / 5) + 32);
        break;
      default:
        break;
    }
  });
}

for (const input of inputs) {
  convertTemperature(input, input.parentElement.id);
}

btn.addEventListener("click", () => {
  for (const input of inputs) {
    input.value = "";
  }
});
