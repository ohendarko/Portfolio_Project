function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculatebmi() {
  const inputElementWeight = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost += 10;
  }
  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}

