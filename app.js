//Listen to Calculate button
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//CalculateResults Function
function calculateResults(e){


  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');

  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
  
  

  //Compute monthly Payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

  } else {
    
    showError('Plese check your numbers ...')
  }

  e.preventDefault();
}

function showError(error) {
  const errorDiv = document.createElement('div');
  const alertDiv = document.getElementById('alert');

  errorDiv.className = 'alert alert-danger mt-3'
  errorDiv.innerText = error;
  alertDiv.appendChild(errorDiv)

  setTimeout(clearError, 2500)

  function clearError() {
    alertDiv.removeChild(alertDiv.firstChild);
  }
}
