const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertButton = document.getElementById("convert");

convertButton.addEventListener("click", () => {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = celsiusValue * 9/5 + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
});
