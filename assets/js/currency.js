let priceOne = document.getElementById("priceOne");
let priceTwo = document.getElementById("priceTwo");

let selectOpOne = document.getElementById("selectOpOne");
let selectOpTwo = document.getElementById("selectOpTwo");

let currencyRates = {};

function currencyOption() {
  let selectedCurrency = selectOpOne.value;
  console.log("Selected Currency:", selectedCurrency);
  convertCurrency();
}
fetch(
  "https://api.currencyfreaks.com/latest?apikey=5ab68a833fb24954bfaf9f53627e4b08"
)
  .then((response) => response.json())
  .then((data) => {
    currencyRates = data.rates;
    convertCurrency();
  });

function convertCurrency() {
  let fromCurrency = selectOpOne.value;
  let toCurrency = selectOpTwo.value;
  let amount = parseFloat(priceOne.value);
  if (
    !isNaN(amount) &&
    currencyRates[fromCurrency] &&
    currencyRates[toCurrency]
  ) {
    let convertedAmount =
      (amount / currencyRates[fromCurrency]) * currencyRates[toCurrency];
    priceTwo.value = convertedAmount.toFixed(3);
  }
}

function priceUpOne() {
  convertCurrency();
}
