
function calculate(values) {
  values = values.replace(/ /g, "");
  if (values.slice(values.length-1, values.length) == ",") {
    values = values.slice(0, values.length-1);
  }
  values = values.split(/,/g);
  var sum = values.reduce(function(a, b) {
    return parseFloat(a) + parseFloat(b);
  });
  document.querySelector('#max').innerHTML = values.max();
  document.querySelector('#min').innerHTML = values.min();
  document.querySelector('#sum').innerHTML = sum;
  document.querySelector('#avg').innerHTML = (sum/values.length).toFixed(14);
  document.querySelector('#reverse').innerHTML = values.reverse().join(', ');
}

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
