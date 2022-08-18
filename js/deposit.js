//step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2: get the deposit amount from the deposit amount field
  //  for input field use .value to get the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step-3: get current deposit total
  // for non-input (element other then input, text area) use innerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  //step-4: add numbers to set the deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // set the deposit total
  depositTotalElement.innerText = currentDepositTotal;
  //step-5: get ballance current total
    const ballanceTotalElement = document.getElementById("ballance-total");
    const previousBalanceTotalString = ballanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total ballance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the ballance total
    ballanceTotalElement.innerText = currentBalanceTotal;

  // step-7: remove deposit field value
  depositField.value = "";
});