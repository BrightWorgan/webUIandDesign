let stroredPass = null


function storePassword(document.getElementById("password");) {
  storedPass = password
}



var isPasswordCorrect = true

function addPasswordText() {
  var x = document.getElementById("textArea");

  if (isPasswordCorrect) {
    x.innerHTML = "Incorrect. Try again, guesses: n. ";
  } else {
    x.innerHTML = "Correct, that took n guesses’";
  }
  isPasswordCorrect = !isPasswordCorrect

}