document.addEventListener("DOMContentLoaded", (event) => {
  const menuList = document.getElementById("menu-list");
  const hideDiscktopMenu = document.getElementById("hide-discktop-menu");
  const closeDiscktopMenu = document.getElementById("close-discktop-menu");

  menuList.onclick = function () {
    hideDiscktopMenu.classList.add("show-menu-mobile");
  };
  closeDiscktopMenu.onclick = function () {
    hideDiscktopMenu.classList.remove("show-menu-mobile");
    // window.document.classList.remove("show-menu-mobile");
  };
});

























// let pirceOne = document.getElementById("pirceOne");
// let pirceTwo = document.getElementById("pirceTwo");

// let selectOpOne = document.getElementById("selectOpOne");

// let select ='';
// function currencyOption() {
//   selectOpOne.value;
//   console.log('asdf',select)
// }

// fetch(
//   "https://api.currencyfreaks.com/latest?apikey=7dccd282f75849bba33aa082207aedff"
// )
//   .then((result) => {
//     let myData = result.json();
//     // console.log(myData);
//     return myData;
//   })
//   .then((currency) => {
//     let amount = document.querySelector(".amount");
//     let tryPrice = document.querySelector(".try span");
//     let eurPrice = document.querySelector(".eur span");
//     // select = selectOpOne.value
   
//     console.log('select',select)
//     currencyOption();
//     // USD
//     let truncUSD = Math.trunc(
//       amount.innerHTML * currency.rates["USD"]
//     ).toString(); // Trunc
//     let restUSD = Math.abs(amount.innerHTML * currency.rates["USD"]) % 1; // Trunc


//     // TRY
//     let truncTRY = Math.trunc(
//       amount.innerHTML * currency.rates["TRY"]
//     ).toString(); // Trunc
//     let restTRY = Math.abs(amount.innerHTML * currency.rates["TRY"]) % 1; // Trunc

//     // EUR
//     let truncEUR = Math.trunc(
//       amount.innerHTML * currency.rates["EUR"]
//     ).toString(); // Trunc
//     let restEUR = Math.abs(amount.innerHTML * currency.rates["EUR"]) % 1; // Trunc

//     let resultTry = truncTRY + restTRY.toString().substring(1, 5);
//     let resultEur = truncEUR + restEUR.toString().substring(1, 5);

//     tryPrice.innerHTML = resultTry;
//     eurPrice.innerHTML = resultEur;

//     pirceTwo.setAttribute("value", resultTry);
// select = resultTry
    
//     console.log('tr',select)
//     let rateses = currency.rates;
//     //
//     for (let ratess in rateses) {
//       // console.log(ratess + ":" + rateses[ratess]);
//       // let allPrices = ratess + ":" + rateses[ratess];
//       let text = `
//       <select name="" id="">
//       <option value="${ratess}">${ratess}</option>
//       </select>
//       `;
//       // selectOption.innerHTML = text;
//     }
//   });

// let priceUpOne = function () {
//   console.log(pirceOne.value);
//   console.log(pirceTwo.value);
// };


// function priceUpOne() {

// }
// function priceUpTwo() {
//   // console.log(pirceOne.value);
//   // console.log(pirceTwo.value);
// }

// const amount = parseFloat(document.getElementById('amount').value);
// console.log(parseFloat(document.getElementById("amount").value));
// console.log(document.querySelector(".amount"));

// console.log("rest");

// //////////////////////////////////////////////

