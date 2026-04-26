const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", () => {
  const billAmountInput = document.getElementById("billAmount");
  const tipPercentageInput = document.getElementById("tipPercentage");

  const totalSpan = document.getElementById("totalSpan");
  const bill = Number(billAmountInput.value);
  const tip = Number(tipPercentageInput.value);

  if (tip === 0 || !tip) {
    totalSpan.textContent = "D:";
    return;
  }

  console.log(bill, tip);
  totalSpan.textContent = (bill * (1 + tip / 100)).toFixed(2);
});
