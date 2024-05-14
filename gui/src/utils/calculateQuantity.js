export const calculateQuantity = (cartItems) => {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.quantity;
  });
  return total;
};
