//  bitcoin 
//  1 = 333
//  ethereum
//  1 = 222
//  litecoin
//  1 = 111

// declare variables
let userAmount = 0;
let userCoin = 0;
let usertotal = 0;

// using let over var as it is more "stable"/ better community practice
function startJava() {

  // attach the user's amount to a variable
  let userAmount = document.getElementById("amount")
  amount = amountElement.value;

  // Print to console to test
  console.log(userAmount);

  // attach the user's crypto choice to a variable
  let userCoin = documnet.getElementById("crypto")
}

function coinConvert() {
  // if statemnets to convert euro -- user's chosen crypto
  if (userCoin == bitcoin)
    userAmount = userAmount * 333
  return userAmount

  if (userCoin == ethereum)
    userAmount = userAmount * 222
  return userAmount

  if (userCoin == litecoin)
    userAmount = userAmount * 111
  return userAmount

  // adds the user's amount to the h4 tag
  let div = document.getElementById("tally")
  div.innerHTML += userAmount;
}

// check if amount is a number else Alert message is displayed
if (userAmount == "")
  alert("\tError!\n\tPlease enter a number")


// keeps a tally of the user's total amount so far/ every time they click the add to total button
function totalCoin() {
  usertotal += userAmount
  return usertotal
}