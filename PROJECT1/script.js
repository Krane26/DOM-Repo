// Select all plus, minus, trash, and heart icons
const plusButtons = document.querySelectorAll('.fa-plus-circle');
const minusButtons = document.querySelectorAll('.fa-minus-circle');
const trashButtons = document.querySelectorAll('.fa-trash-alt');
const heartButtons = document.querySelectorAll('.fa-heart');

// Select all quantities and the total price element
const quantities = document.querySelectorAll('.quantity');
const unitPrices = document.querySelectorAll('.unit-price');
const totalPriceElement = document.querySelector('.total');

// Function to update the total price
const updateTotalPrice = () => {
  let total = 0;
  quantities.forEach((quantity, index) => {
    const unitPrice = parseFloat(unitPrices[index].textContent.replace(' $', ''));
    total += parseInt(quantity.textContent) * unitPrice;
  });
  totalPriceElement.textContent = `${total.toFixed(2)} $`;
};

// Add event listeners for the "+" buttons
plusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const quantity = quantities[index];
    quantity.textContent = parseInt(quantity.textContent) + 1;
    updateTotalPrice();
  });
});

// Add event listeners for the "-" buttons
minusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const quantity = quantities[index];
    if (parseInt(quantity.textContent) > 0) {
      quantity.textContent = parseInt(quantity.textContent) - 1;
      updateTotalPrice();
    }
  });
});

// Add event listeners for the trash buttons
trashButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.card-body');
    productCard.remove();
    updateTotalPrice();
  });
});

// Add event listeners for the heart buttons
heartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
    button.style.color = button.classList.contains('liked') ? 'red' : 'black';
  });
});

// Initial calculation of the total price
updateTotalPrice();
