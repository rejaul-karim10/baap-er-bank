/**
 * 
 * 1. add event handler to the withdraw button
 * 2. get the withdraw amount form the withdraw input field
 * 3. also make sure to convert the input to number by parseFloat
 * 4. get previous withdraw total
 * 5. calculate total withdraw amount
 * 6. set total withdraw total
 * 7. clear the input field
 * */
// step-1
document.getElementById("btn-withdraw").addEventListener('click', function () {
    // step-2
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step-3:

    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal; 

    // step-5
    const ballanceTotalElement = document.getElementById("ballance-total");
    const previousBalanceTotalString = ballanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('baap er bank e eto tk nai');
        return;
    }

    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    ballanceTotalElement.innerText = newBalanceTotal;

// step-7: clear the input field
    withdrawField.value = '';
})