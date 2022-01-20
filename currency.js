// include api for currency change
const apiURL = "https://api.exchangerate-api.com/v6/latest/USD";
fetch (apiURL)
.then((response) => response.json())
.then((currencyInfo)=> {
console.log(currencyInfo);

document.getElementById("title").innerHTML=currencyInfo.Title;
document.getElementById("base").innerHTML=currencyInfo.Base;
document.getElementById("date").innerHTML=currencyInfo.Date;
document.getElementById("provider").innerHTML=currencyInfo.Provider;
document.getElementById("rates").innerHTML=currencyInfo.Rates;
}
);

// for selecting different controls
// var search = document.querySelector(".searchBox");
// var convert = document.querySelector(".convert");
// var fromCurrecy = document.querySelector(".from");
// var toCurrecy = document.querySelector(".to");
// var finalValue = document.querySelector(".finalValue");
// var finalAmount = document.getElementById("finalAmount");
// var resultFrom;
// var resultTo;
// var searchValue;

// // Event when currency is changed
// fromCurrecy.addEventListener('change', (event) => {
// 	resultFrom = `${event.target.value}`;
// });

// // Event when currency is changed
// toCurrecy.addEventListener('change', (event) => {
// 	resultTo = `${event.target.value}`;
// });

// search.addEventListener('input', updateValue);

// // function for updating value
// function updateValue(e) {
// 	searchValue = e.target.value;
// }

// // when user clicks, it calls function getresults
// convert.addEventListener("click", getResults);

// // function getresults
// function getResults() {
// 	fetch(`${api}`)
// 		.then(currency => {
// 			return currency.json();
// 		}).then(displayResults);
// }

// // display results after convertion
// function displayResults(currency) {
// 	let fromRate = currency.rates[resultFrom];
// 	let toRate = currency.rates[resultTo];
// 	finalValue.innerHTML =
// 	((toRate / fromRate) * searchValue).toFixed(2);
// 	finalAmount.style.display = "block";
// }

// // when user click on reset button
// function clearVal() {
// 	window.location.reload();
// 	document.getElementById("finalValue").innerHTML = "";
// };
