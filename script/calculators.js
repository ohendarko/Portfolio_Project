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

  let BMI = weight / (height * height);

  document.querySelector('.total-bmi').innerHTML = `$${BMI}`;
}
