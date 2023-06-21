function calculateTreatmentTime(dosage, powerDensity) {
  if (isNaN(dosage) || isNaN(powerDensity) || powerDensity === 0) {
    return null;
  }

  const treatmentTime = dosage / (powerDensity / 1000);
  const minutes = Math.floor(treatmentTime / 60);
  const seconds = Math.ceil(treatmentTime % 60);

  return {
    minutes,
    seconds
  };
}

document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.rlt-calc-button');
  button.addEventListener('click', function() {
    const dosageInput = document.querySelector('.rlt-dosage-input');
    const irradianceInput = document.querySelector('.rlt-irradiance-input');
    const resultElement = document.querySelector('.rlt-result');

    const dosage = parseFloat(dosageInput.value);
    const powerDensity = parseFloat(irradianceInput.value);

    const treatmentTime = calculateTreatmentTime(dosage, powerDensity);
    if (treatmentTime) {
      resultElement.textContent = `Treatment Time: ${treatmentTime.minutes} minutes ${treatmentTime.seconds} seconds`;
    } else {
      resultElement.textContent = "Please enter valid numbers for dosage and power density.";
    }
  });
});
