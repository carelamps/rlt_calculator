document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.rlt-calc-button');
  button.addEventListener('click', calculateTreatmentTime);
});

function calculateTreatmentTime() {
  const dosageInput = document.querySelector('.rlt-dosage-input');
  const irradianceInput = document.querySelector('.rlt-irradiance-input');
  const resultElement = document.querySelector('.rlt-result');

  const dosage = parseFloat(dosageInput.value);
  const powerDensity = parseFloat(irradianceInput.value);

  if (isNaN(dosage) || isNaN(powerDensity) || powerDensity === 0) {
    resultElement.textContent = "Please enter valid numbers for dosage and power density.";
  } else {
    const treatmentTime = dosage / powerDensity * 60; // time in seconds
    const minutes = Math.floor(treatmentTime / 60);
    const seconds = Math.floor(treatmentTime % 60);
    resultElement.textContent = `Treatment Time: ${minutes} minutes ${seconds} seconds`;
  }
}
