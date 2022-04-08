function changeText() {
  var x = document.getElementById("party");
  if (x.innerHTML === "The Alummi Association's first Christmas Party will be held on Saturday 19th December") {
    x.innerHTML = "This year’s Christmas Party will be held on Saturday 17th December";
  } else {
    x.innerHTML = "The Alummi Association's first Christmas Party will be held on Saturday 19th December";
  }

  function changePic() {;
  }

  function addText() {
    var y = document.getElementById("extra");
    if (y.innerHTML === " ") {
      y.innerHTML = "\nHappy Christmas!";
    } else {
      y.innerHTML = " ";
    }
  }
}