var isFirstChristmasParty = true

function changeText() {
  var x = document.getElementById("party");
  x.style.backgroundColor = "grey"
  if (isFirstChristmasParty) {
    x.innerHTML = "This year’s Christmas Party will be held on Saturday 17th December";
  } else {
    x.innerHTML = "The Alummi Association's first Christmas Party will be held on Saturday 19th December";
  }
  isFirstChristmasParty = !isFirstChristmasParty

}

function changePic() {
  var div = document.getElementById("image")
  div.innerHTML = "<img src='banner.png'>";
}

function addText() {
  var div = document.getElementById("extra")
  div.innerHTML += "Happy Christmas!";
}