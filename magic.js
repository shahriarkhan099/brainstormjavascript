var arr, text, randomNumber;


function clearIt() {
  document.getElementById("textArea").value = "";
}


function capCase() {
  text = document.getElementById("textArea").value;
  document.getElementById("textArea").value = text.toUpperCase();
}


function sortAll() {
  values = document.getElementById("textArea").value;
  if (values.slice(values.length - 1, values.length) == "\n") {
    values = values.slice(0, values.length - 1);
  }
  arr = values.split(/\n/g);
  arr = arr.sort();
  clearIt();
  for (var i = 0; i < arr.length; i++) {
    document.getElementById("textArea").value += arr[i] + "\n";
  }
}


function reverseAll() {
  values = document.getElementById("textArea").value;
  if (values.slice(values.length - 1, values.length) == "\n") {
    values = values.slice(0, values.length - 1);
  }
  arr = values.split(/\n/g);
  arr = arr.sort();
  clearIt();
  for (var i = arr.length - 1; i >= 0; i--) {
    document.getElementById("textArea").value += arr[i] + "\n";
  }
}


function stripBlank() {
  values = document.getElementById("textArea").value;
  arr = values.split(/\n/g);
  clearIt();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== "\n" && arr[i] !== "\n" && arr[i] !== "") {
      if (i !== arr.length - 1) {
        document.getElementById("textArea").value += arr[i].trim() + "\n";
      } else {
        document.getElementById("textArea").value += arr[i].trim();
      }
    }
  }
}


function addNum() {
  values = document.getElementById("textArea").value;
  arr = values.split(/\n/g);
  clearIt();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== "\n" && arr[i] !== "\n" && arr[i] !== "") {
      document.getElementById("textArea").value += (i + 1) + ". " + arr[i] + "\n";
    }
  }
}


function shuffle() {
  values = document.getElementById("textArea").value;
  arr = values.split(/\n/g);
  arr = shuffleArray(arr);
  clearIt();
  for (var i = 0; i < arr.length; i++) {

    if (arr[i] !== "\n" && arr[i] !== "\n" && arr[i] !== "") {
      document.getElementById("textArea").value += arr[i] + "\n";
    }
  }
}

function shuffleArray(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
