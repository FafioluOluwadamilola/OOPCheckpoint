class Product {
  constructor(name, price, id) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem = new ShoppingCartItem(product, quantity);
      this.items.push(newItem);
    }
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  displayCart() {
    this.items.forEach(item => {
      console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
    });
  }
}

// Example usage

const apple = new Product('Apple', 1.5, 1);
const banana = new Product('Banana', 0.75, 2);
const orange = new Product('Orange', 1.25, 3);

const cart = new ShoppingCart();

cart.addItem(apple, 3);
cart.addItem(banana, 2);
cart.addItem(orange, 1);

cart.displayCart();
console.log('Total Items:', cart.getTotalItems());
console.log('Total Price:', cart.getTotalPrice());

// Remove an item
cart.removeItem(2);

cart.displayCart();
console.log('Total Items:', cart.getTotalItems());
console.log('Total Price:', cart.getTotalPrice());
