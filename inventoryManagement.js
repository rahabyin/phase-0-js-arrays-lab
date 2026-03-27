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