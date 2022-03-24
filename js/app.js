'use strict';

// Cart constructor.
const Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // DONE: Fill in this instance method to create a new CartItem and add it to this.items

  //CREATING CartItem OBJECT
  let cartItem = new CartItem(product, quantity);
  // this.items = cartItem;
  cart.items.push(cartItem);
  //cart - ref to array. items - the array. pushing that object cartItem into items.
  let stringifiedItems = JSON.stringify(cart.items);
  //now we have reference, we can store it in local storage
  localStorage.setItem('cart', stringifiedItems);

};

Cart.prototype.saveToLocalStorage = function() {
  // DONE: Fill in this instance method to save the contents of the cart to localStorage.


};
//what parameter do we want to pass thru? cartItem.product. btw, product = item.
// cart is an array
// for loop go thru itemsArray
// if statement -- if name matches, take it out 
//cart.removeItem('dragon')
// cart.items.length --- layers in console -- first, in cart - then item array in cart. 
Cart.prototype.removeItem = function(item) {
  
  for (let i = 0; i < cart.items.length; i++) {
    if (cart.items[i].product === item) {
      cart.items.pop(cart.items[i]);
    }
  }
  // DONE: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
};

const CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
const Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
