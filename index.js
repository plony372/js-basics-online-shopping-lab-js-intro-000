var cart = [];

function getCart(nameOfItem) {
  var newObject = {}
  for (var i = 0; i < nameOfItem.length; i++){
    newObject[nameOfItem[i]] = Math.floor(Math.random() * 100);
  }
 return newObject;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(nameOfItem) {
  var words = nameOfItem.split(" ");
  for (var i = 0; i < words.length; i++){
    var newObject = {}
    newObject["itemName"] = nameOfItem;
    newObject["itemPrice"] = Math.floor(Math.random() * 100);
    cart.push(newObject)
  }
 return `${nameOfItem} has been added to your cart.`;
}

function viewCart() {
  // write your code here
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
