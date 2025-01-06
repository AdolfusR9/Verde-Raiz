function calcularTotal() {
  const product = document.getElementById('product');
  const quantity = document.getElementById('quantity').value || 0;
  const total = document.getElementById('total');
  const price = parseInt(product.value) || 0;
  total.value = `$${price * quantity}`;
}

// Vincular el evento para el cálculo automático
document.getElementById('product').addEventListener('change', calcularTotal);
document.getElementById('quantity').addEventListener('input', calcularTotal);
