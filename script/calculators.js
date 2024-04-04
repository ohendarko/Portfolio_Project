function calculatebmi() {
  const inputElementWeight = document.querySelector('.weight');
  const inputElementHeight = document.querySelector('.height');
  let weight = Number(inputElementWeight.value);
  let height = Number(inputElementHeight.value);

  if (isNaN(weight) || isNaN(height)) {
    document.querySelector('.total-bmi').innerHTML = `Invalid input`;
    document.querySelector('.total-bmi').classList.add('red');
    return;
  }

  if (weight === 0 && height === 0) {
    document.querySelector('.total-bmi').innerHTML = `Weight missing. Input required. Height missing Input required`;
    document.querySelector('.total-bmi').classList.add('red');
    return;
  }

  if (weight === 0) {
    document.querySelector('.total-bmi').innerHTML = `Weight missing. Input required`;
    document.querySelector('.total-bmi').classList.add('red');
    return;
  }

  if (height === 0) {
    document.querySelector('.total-bmi').innerHTML = `Height missing Input required`;
    document.querySelector('.total-bmi').classList.add('red');
    return;
  }

  let bmi = weight / (height * height);
  let BMI = bmi.toFixed(2);
  //let BMI = inputElementHeight.value;

  document.querySelector('.total-bmi').innerHTML = `BMI = ${BMI} kg/sq.m`;
}

function handlebmiKeydown(event) {
  if (event.key === 'Enter') {
    calculatebmi();
  }
}
