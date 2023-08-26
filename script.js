document.addEventListener("DOMContentLoaded", function() {
    const convertBtn = document.getElementById("convert-btn");
    const amountInput = document.getElementById("amount");
    const currencySelect = document.getElementById("currency");
    const resultDiv = document.getElementById("result");

    convertBtn.addEventListener("click", function() {
        const amount = parseFloat(amountInput.value);
        const selectedCurrency = currencySelect.value;

        const exchangeRates = {
            eur: 0.85,
            gbp: 0.72,
            jpy: 110.67,
            usd: 1,       // USD to 1 USD (1:1)
        };

        if (isNaN(amount)) {
            resultDiv.textContent = "Please enter a valid amount.";
        } else {
            const convertedAmount = (amount * exchangeRates[selectedCurrency]).toFixed(2);
            resultDiv.textContent = `${amount.toFixed(2)} THB is approximately ${convertedAmount} ${selectedCurrency.toUpperCase()}.`;
        }
    });
});
