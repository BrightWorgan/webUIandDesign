let stroredPass = null

// Store User's Password
function storePassword() {
  passInput = document.getElementById("password");

  storedPass = passInput.value;

}

// Changes Styleing on Buttons
function hideBox() {
  if document.getElementById("storedPass") = display: hidden

}


// Check User's Password 
var count = 0


var isPasswordCorrect = true

function checkPassword() {
  var x = document.getElementById("textArea");

  if (isPasswordCorrect) {
    x.innerHTML = "Incorrect. Try again, guesses: " + count;
  } else {
    x.innerHTML = "Correct, that took" + count + " guesses";
  }
  isPasswordCorrect = !isPasswordCorrect
  count += 1
}