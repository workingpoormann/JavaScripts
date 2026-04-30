const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

celsiusInput.addEventListener("change", () => {
  // celsius to fahrenheit
  fahrenheitInput.value = ((Number(celsiusInput.value) * 9) / 5 + 32).toFixed(
    2,
  );

  // celsius to kelvin
  kelvinInput.value = (Number(celsiusInput.value) + 273.15).toFixed(2);
});

fahrenheitInput.addEventListener("change", () => {
  // fahrenheiht to celsius
  celsiusInput.value = (((Number(fahrenheitInput.value) - 32) * 5) / 9).toFixed(
    2,
  );

  // fahrenheit to kelvin
  kelvinInput.value = (
    ((Number(fahrenheitInput.value) - 32) * 5) / 9 +
    273.15
  ).toFixed(2);
});

kelvinInput.addEventListener("change", () => {
  // kelvin to celsius
  celsiusInput.value = (Number(kelvinInput.value) - 273.15).toFixed(0);

  // kelvin to fahrenheit
  fahrenheitInput.value = (
    ((Number(kelvinInput.value) - 273.15) * 9) / 5 +
    32
  ).toFixed(2);
});
