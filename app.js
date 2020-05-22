//Listen to Calculate button
document.getElementById('loan-form').addEventListener('submit', function(e){
  document.getElementById('results').style.display='none';
  //show Loader
  document.getElementById('loading').style.display='block';
  setTimeout(calculateResults, 1500)
  
  

  e.preventDefault();
});


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
    document.getElementById('loading').style.display='none';
    document.getElementById('results').style.display='block';

  } else {
    showError('Ups ... algo salió mal. Por favor, revisá el formulario');
  }
  
}

function showError(error) {
  document.getElementById('loading').style.display='none';
  document.getElementById('results').style.display='none';
  const errorDiv = document.createElement('div');
  const alertDiv = document.getElementById('alert');

  errorDiv.className = 'alert alert-danger mt-3'
  errorDiv.innerText = error;
  alertDiv.appendChild(errorDiv)

  setTimeout(clearError, 3000)

  function clearError() {
    alertDiv.removeChild(alertDiv.firstChild);
  }
}
