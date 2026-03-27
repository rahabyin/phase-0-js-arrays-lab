// Write your code here
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(newProduct) {
  products.push(newProduct);
  return products;
}

function updateProductName(position, newName) {
  if (position >= 0 && position < products.length) {
    products[position] = newName;
    console.log("Product list updated successfully!");
  } else {
    console.log("Error: That position does not exist.");
  }
  return products;
}

function removeLastProduct() {
  products.pop();
  console.log(products);
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
