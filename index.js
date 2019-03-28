var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  let price = Math.floor(Math.random()*100)
  let newCart = [{  itemName: item, 
                      itemPrice: price 
                  }];
  cart.push(newCart)          ;      
  return `${itemName} has been added to your cart.`;
}

function viewCart() {
  let cartSt = "";
  for (let i = 0; i < cart.length-1; i++) {
    if (i === cart.length-1) {
       cartSt += `In your cart, you have ${itemName} at ${price}.';
    } else { 
      cartSt += `In your cart, you have ${itemName} at ${price},`;
    }
  }
  return cartSt;
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
