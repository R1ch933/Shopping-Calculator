function calculateValue() {
  var amount = document.getElementById('quan').value;
  var measure = document.getElementById('measurement').value;
  var cost = document.getElementById('quantity-input').value;
  
  //validates input
  if (amount === '' || cost === '' || measure === '0') {
    alert('please enter values');
    return;
  }
  
  //total
  var total = cost/amount;
  total = Math.round(total*100)/100;
  total = total.toFixed(2);
  // display total
  document.getElementById('output').style.display = 'block';
  document.getElementById('output_amount').innerHTML = '$' + total + ' per' + ' ' + measure;
}

//hides total
document.getElementById('output').style.display = 'none';
//calls function
document.getElementById('calc').onclick = function() {
  calculateValue();
};