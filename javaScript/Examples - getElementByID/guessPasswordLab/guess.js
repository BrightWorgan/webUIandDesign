let stroredPass = null

// Store User's Password
function storePassword() {
  passInput = document.getElementById("password");

  storedPass = passInput.value;

  passInput.value = '';
  hideBox();
}

// Changes Styling on Buttons
function hideBox() {
  let checkPassElement = document.getElementById('checkpass')
  let storePassElement = document.getElementById('storepass')
  if (checkPassElement.style.display === 'none') {
    checkPassElement.style.display = '';
  } else {
    checkPassElement.style.display = 'none';
  }
  if (storePassElement.style.display === 'none') {
    storePassElement.style.display = '';
  } else {
    storePassElement.style.display = 'none';
  }
}

// Check User's Password 

// counter to count number of user passwords entered
let count = 0

function checkPassword() {
  //console.log('Clicked on checkPassword!!!')      //testy westy

  // Grab the currently typed password value from the user
  let passwordElement = document.getElementById('password')

  // Compare it to the stored password
  if (passwordElement.value === storedPass) {
    let div = document.getElementById("textArea")
    passwordElement.style.borderColor = 'green';
    div.innerHTML = "\n Correct, that took " + count + " guesses.";

  } else {
    count += 1
    let div = document.getElementById("textArea")
    passwordElement.style.borderColor = 'red';
    div.innerHTML = "\n Incorrect. Try again, guesses: " + count;
  }
  passwordElement.value = ""
    // If they are the same, change textarea to correct string
    // If they are different, change textarea to incorrect + clear out password + add to count
}