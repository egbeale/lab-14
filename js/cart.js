/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

//taking local storage, parsing the stringify. storing that in cartItems
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}
console.log(cart);
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
//recreating our table every single time. renderCart will call all 3 of these functions
function renderCart() {

  //loadCart - getting local storage
  loadCart();

  //deleting old table
  clearCart();

  // creating the updated table 
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  let tbodyEl = document.getElementsByTagName('tbody');

  while (tbodyEl.firstChild) {
    tbodyEl.removeChild(tbodyEl.firstChild);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  let tbodyEl = document.getElementById('tbody');

  // DONE: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
  let product = cart.items[i].product;
  let quantity = cart.items[i].quantity;
  }
  console.log(product);
  console.log(quantity);

  // DONE: Create a TR
  let tRow = document.createElement('tr');
  tbodyEl.appendChild(tRow);

  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

  let tCell = document.createElement('td');
  tCell.textContent = 'x';
  tRow.appendChild(tCell);

  let tQuant = document.createElement('td');
  tQuant.textContent = `${quantity}`;
  tRow.appendChild(tQuant);

  let tItem = document.createElement('td');
  tItem.textContent = `${product}`;
  tRow.appendChild(tItem);

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
showCart();
