// 1. Declarar o inventário vazio
let inventory = [];

// 2. Função para encontrar índice pelo nome (normalizado)
function findProductIndex(productName) {
  const nameLower = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === nameLower) {
      return i;
    }
  }
  return -1;
}

// 3. Função para adicionar produto
function addProduct(productObj) {
  const nameLower = productObj.name.toLowerCase();
  const index = findProductIndex(nameLower);

  if (index !== -1) {
    inventory[index].quantity += productObj.quantity;
    console.log(`${nameLower} quantity updated`);
  } else {
    inventory.push({ name: nameLower, quantity: productObj.quantity });
    console.log(`${nameLower} added to inventory`);
  }
}

// 4. Função para remover produto
function removeProduct(productName, quantityToRemove) {
  const nameLower = productName.toLowerCase();
  const index = findProductIndex(nameLower);

  if (index === -1) {
    console.log(`${nameLower} not found`);
    return;
  }

  const product = inventory[index];

  if (quantityToRemove > product.quantity) {
    console.log(`Not enough ${nameLower} available, remaining pieces: ${product.quantity}`);
  } else if (quantityToRemove === product.quantity) {
    inventory.splice(index, 1);
    console.log(`${nameLower} completely removed from inventory`);
  } else {
    product.quantity -= quantityToRemove;
    console.log(`Remaining ${nameLower} pieces: ${product.quantity}`);
  }
}
