function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculatebmi() {
  const inputElementWeight = document.querySelector('.weight');
  const inputElementHeight = document.querySelector('.height');
  let weight = Number(inputElementWeight.value);
  let height = Number(inputElementHeight.value);

  let bmi = weight / (height * height);
  let BMI = bmi.toFixed(2);

  document.querySelector('.total-bmi').innerHTML = `BMI = ${BMI} kg/sq.m`;
}
