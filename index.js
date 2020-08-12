var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let obj = {itemName:item, itemPrice: Math.floor((Math.random() * 100) + 1)};
 getCart().push(obj);
 return item + " has been added to your cart.";
}

function viewCart() {
  // write your code here
  if (getCart().length === 0) {
    return "Your shopping cart is empty.";
  } else {
    let items = [];
    for (let i=0; i < getCart().length; i++) {
      let val = getCart()[i].itemName + " at " + getCart()[i].itemPrice;
      items.push(val);
    }
    return "In your cart, you have " + items.join(", ") + ".";
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
