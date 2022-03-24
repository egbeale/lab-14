/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let optionElem = document.createElement('option');
    optionElem.textContent = Product.allProducts[i].name;
    optionElem.value = Product.allProducts[i].name;
    selectElement.appendChild(optionElem);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  // Saving cartItems to local storage.
  cart.saveToLocalStorage();
  console.log(cart);

  updateCounter();
  updateCartPreview();

}

// DONE: Add the selected item and quantity to the cart
//ADDING ITEM TO CART
function addSelectedItemToCart() {
  // DONE: suss out the item picked from the select list
  //STORING VALUE IN ITEM AND QUANTITY
  let item = document.getElementById('items').value;

  // DONE: get the quantity
  let quantity = document.getElementById('quantity').value;

  // DONE: using those, add one item to the Cart
//ADDITEM = METHOD OF CART
  cart.addItem(item, quantity);
  // I.E. - cart.addItem(BAG, 5);
}

// DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let itemCount = document.getElementById('itemCount');
  let itemsInCart = cart.items.length;
  itemCount.innerText = `(${itemsInCart})`;
  
  console.log(itemsInCart);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
