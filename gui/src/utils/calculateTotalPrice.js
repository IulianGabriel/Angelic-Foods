export const calculateTotalPrice = (cartItems) => {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.quantity * parseFloat(item.price);
  });
  return total;
};
