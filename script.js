document.getElementById('calculateBtn').addEventListener('click', calculateBMI);
document.getElementById('refreshBtn').addEventListener('click', function() {
    location.reload();
  });

function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert to meters
  const bmi = weight / (height * height);
  const result = document.getElementById('result');

  if (isNaN(bmi)) {
    result.textContent = 'Please enter valid values.';
  } else {
    result.textContent = `Your BMI is ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
      result.style.color = 'blue';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result.style.color = 'green';
    } else if (bmi >= 25 && bmi < 29.9) {
      result.style.color = 'orange';
    } else {
      result.style.color = 'red';
    }
  }
}
