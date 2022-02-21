
function onEnter() {
  var findType = document.querySelector("#convert").value;
  var val = document.querySelector("#input").value;
  if (findType == 1) {
    var result = document.getElementById("result").innerHTML=(val/2.2046).toFixed(4)+" kilograms";
  }
  else {
    var result = document.getElementById("result").innerHTML=(val*2.2046).toFixed(4)+" pounds";
  }
}
