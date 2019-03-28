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
    if (cart.length === 0) {
      cartSt += `Your shopping cart is empty.`
    } else if (i === cart.length-1) {
       cartSt += `In your cart, you have ${itemName} at ${price}.`
    } else { 
      cartSt += `In your cart, you have ${itemName} at ${price},`
    }
  }
  return cartSt;
}

function total() {
  let totItems = 0
  let totValue = 0
  for (let i = 0; i < cart.length-1; i++) {
    //totItems += i    
    totValue += cart[i].price
  }
  return totValue
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length-1; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
    } else {
      return 'That item is not in your cart.'
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
