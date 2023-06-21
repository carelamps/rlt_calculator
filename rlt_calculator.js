function calculateTreatmentTime(dosage, powerDensity) {
  if (isNaN(dosage) || isNaN(powerDensity) || powerDensity === 0) {
    return null;
  }

  const treatmentTime = dosage / powerDensity * 60; // time in seconds
  const minutes = Math.floor(treatmentTime / 60);
  const seconds = Math.floor(treatmentTime % 60);

  return {
    minutes,
    seconds
  };
}
